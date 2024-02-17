import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as multerS3 from 'multer-s3';
import * as mime from 'mime-types';
import { CustomException } from '../exception/custom.exception';
import { UserDataInAuthGuard } from '../types/user.type';

export const multerS3Config = (configService: ConfigService): MulterOptions => {
  const s3 = new S3Client({
    region: process.env.AWS_RIGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    },
  });

  return {
    storage: multerS3({
      s3,
      bucket: process.env.S3_BUCKET_NAME,
      acl: 'public-read',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      key: function (req: any, file, cb) {
        const user: UserDataInAuthGuard = req.user;
        if (!user) {
          cb(new CustomException('로그인에 실패하였습니다.', 403));
        }

        const pathParam = req.path.split('/');
        const uploadType = pathParam[1]; // users / chats
        const uploadDetailType = pathParam[3]; // image / portfolio
        const id = pathParam[4]; // userId / chatId

        let savedPath: string = '';
        let uploadedName: string = '';
        switch (uploadType) {
          case 'users':
            if (uploadDetailType === 'image') {
              savedPath = 'users/' + user.type + ' - ID: ' + id;
              uploadedName = 'image';
            } else {
              savedPath = 'users/' + user.type + ' - ID: ' + id;
              uploadedName = 'portfolio';
            }
            break;
          case 'chats': // TODO 채팅에서 파일 업로드 적용 후 변경
            savedPath = 'chats/' + 'ID: ' + id;
            uploadedName = 'chatFiles';
            break;
          default:
            cb(new CustomException('잘못된 접근입니다.', 400));
        }
        const currentDate = new Date();
        const formattedDate = currentDate
          .toISOString()
          .replace(/:/g, '-')
          .slice(0, -5); // 2024-01-08T07-15-59 <- 위와 같은 모양새
        cb(
          null,
          `${savedPath}/${uploadedName} ${formattedDate}.${mime.extension(
            file.mimetype,
          )}`,
        );
      },
    }),
    limits: {
      fileSize: 1024 * 1024 * 100, // 100 MB
      files: 1,
    },
    fileFilter(req, file, callback) {
      const allowedMimeTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/heic',
        'image/heif',
        'application/pdf',
        'application/zip',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/x-hwp',
        'text/html',
      ];

      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true); // 허용
      } else {
        callback(
          new CustomException('허용되지않은 파일 확장자입니다.', 400),
          false,
        );
      }
    },
  };
};
