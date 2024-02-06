import { userType } from 'prisma/generated/mysql';

export interface postInList {
  readonly postId: number;
  readonly title: string;
  readonly content: string;
  readonly view: number;
  readonly recommend: number;
  readonly postCreateDate: Date;
  readonly postUpdateDate: Date;
  readonly userId: number;
  readonly username: string;
  readonly image: string;
  readonly userType: userType;

  readonly companyName: string;
  readonly jobDescription: string;
  readonly school: string;
  readonly major: string;

  readonly categoryName: string;
}
