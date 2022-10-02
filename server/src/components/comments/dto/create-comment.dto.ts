export class CreateCommentDto {
  readonly content: string;
  readonly likes: number;
  readonly articleId: number;
  readonly userId: number;
}
