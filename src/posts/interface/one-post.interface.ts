export interface onePostIncludeComments {
  // 게시글 관련
  readonly postId: number;
  readonly postIncumbentId: number;
  readonly postStudentId: number;
  readonly postTitle: string;
  readonly postContent: string;
  readonly postView: number;
  readonly postRecommend: number;
  readonly postReported: number;
  readonly postCreatedDate: Date;
  readonly postUpdatedDate: Date;
  // 댓글 관련
  readonly commentId: number;
  readonly commentIncumbentId: number;
  readonly commentStudentId: number;
  readonly commentContent: string;
  readonly parentCommentId: number;
  readonly commentRecommend: number;
  readonly commentCreatedDate: Date;
  readonly commentUpdatedDate: Date;
}
