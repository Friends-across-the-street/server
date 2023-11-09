import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} -[${level}]- ${message}`;
        }),
      ),
    }),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use((req, res, next) => {
    // 모든 요청에 대한 로깅
    console.log(
      `${req.method} ${req.url} ${res.statusCode} - ${
        res.getHeader('content-length') || 0
      } bytes`,
    );
    next();
  });
  await app.listen(3000);
}
bootstrap();
