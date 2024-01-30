/** 게시글 쿼리문 반환 타입 */
export interface onePostForQuery {
  readonly id: number;
  readonly incumbentId?: number;
  readonly studentId?: number;
  readonly name: string;
  readonly image?: string;
  readonly title: string;
  readonly content: string;
  readonly view: number;
  readonly recommend: number;
  readonly reported: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
}

/** 게시글 리턴값 */
export interface refinedOnePost {
  readonly id: number;
  readonly user: {
    readonly incumbentId?: number;
    readonly studentId?: number;
    readonly name: string;
    readonly image?: string;
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
  readonly incumbentId?: number;
  readonly studentId?: number;
  readonly name: string;
  readonly image?: string;
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
    readonly incumbentId?: number;
    readonly studentId?: number;
    readonly name: string;
    readonly image?: string;
  };
  readonly content: string;
  readonly parentCommentId?: number;
  readonly recommend: number;
  readonly createdDate: Date;
  readonly updatedDate: Date;
  readonly isMine: boolean;
}
