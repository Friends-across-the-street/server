import { userType } from 'prisma/generated/mysql';

/** 게시글 쿼리문 반환 타입 */
export interface onePostForQuery {
  readonly id: number;
  readonly postUserId: number;
  readonly title: string;
  readonly content: string;
  readonly view: number;
  readonly recommend: number;
  readonly reported: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
  readonly userId: number;
  readonly name: string;
  readonly image: string;
  readonly userType: userType;
}

/** 게시글 리턴값 */
export interface refinedOnePost {
  readonly id: number;
  readonly user: {
    readonly userId?: number;
    readonly name: string;
    readonly image?: string;
    readonly type: userType;
  };
  readonly title: string;
  readonly content: string;
  readonly view: number;
  readonly recommend: number;
  readonly reported: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
  readonly isMine: boolean;
  readonly isRecommend: boolean;
}

/** 댓글 쿼리문 반환 타입 */
export interface commentsInPostForQuery {
  readonly id: number;
  readonly commentUserId: number;
  readonly userId: number;
  readonly userType: userType;
  readonly name: string;
  readonly image: string;

  readonly companyName: string;
  readonly jobDescription: string;
  readonly school: string;
  readonly major: string;

  readonly content: string;
  readonly parentCommentId?: number;
  readonly recommend: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
}

/** 댓글 리턴값 */
export interface refinedCommentsInPost {
  readonly id: number;
  readonly user: {
    readonly userId?: number;
    readonly name: string;
    readonly image?: string;
    readonly type: userType;
    readonly additionalInfo: string;
  };
  readonly content: string;
  readonly parentCommentId?: number;
  readonly recommend: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
  readonly isMine: boolean;
}
