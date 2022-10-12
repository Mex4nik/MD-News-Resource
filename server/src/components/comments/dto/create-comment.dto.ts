export class CreateCommentDto {
  readonly content: string;
  readonly articleId: number;
  readonly userId: number;
}
