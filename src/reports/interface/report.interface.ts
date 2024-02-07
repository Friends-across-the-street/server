import { UserDataInAuthGuard } from 'src/global/types/user.type';
import { ReportedType } from '../enum/report-type.enum';

export interface ReportTypeArgs {
  readonly id: number;
  readonly reason: string;
  readonly user: UserDataInAuthGuard;
  readonly type: ReportedType;
}
