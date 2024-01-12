export interface ReportPostArgs {
  readonly postId: number;
  readonly reason: string;
  readonly incumbentId?: number;
  readonly studentId?: number;
}
