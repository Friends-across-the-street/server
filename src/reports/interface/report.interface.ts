export interface ReportPostArgs {
  readonly postId: number;
  readonly reason: string;
  readonly incumbentUserId: number | null;
  readonly studentUserId: number | null;
}
