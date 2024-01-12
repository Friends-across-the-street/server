export interface CreatePostArgs {
  readonly title: string;
  readonly content: string;
  readonly incumbent_id?: number;
  readonly student_id?: number;
}
