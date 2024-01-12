export interface CreatePostArgs {
  readonly title: string;
  readonly content: string;
  readonly incumbentId?: number;
  readonly studentId?: number;
}
