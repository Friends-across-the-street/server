export interface ReportPostArgs {
  readonly postId: number;
  readonly reason: string;
  readonly incumbent_id: number | null;
  readonly student_id: number | null;
}
