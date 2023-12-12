export interface CreatePostArgs {
  readonly title: string;
  readonly content: string;
  readonly incumbentUserId: number | null;
  readonly studentUserId: number | null;
}
