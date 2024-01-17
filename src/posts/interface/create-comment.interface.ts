export interface CreateCommentArgs {
  readonly postId: number;
  readonly content: string;
  readonly parentCommentId?: number;
  readonly incumbentId?: number;
  readonly studentId?: number;
}
