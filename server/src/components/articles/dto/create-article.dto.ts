export class CreateArticleDto {
  readonly title: string;
  readonly content: string;
  readonly image: string;
  readonly categoryId: number;
  readonly userId: number;
}
