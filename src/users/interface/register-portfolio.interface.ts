import { UserDataInAuthGuard } from 'src/global/types/user.type';

export interface RegisterPortfolioArgs {
  file: Express.MulterS3.File;
  user: UserDataInAuthGuard;
}
