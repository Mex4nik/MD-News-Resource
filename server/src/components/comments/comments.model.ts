// import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/components/users/user.model';
import { Article } from '../articles/articles.model';

interface CommentCreationAttrs {
  content: string;
  likes: number;
  articleId: number;
  userId: number;
}

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(8000),
    allowNull: false,
  })
  content: string;

  @ForeignKey(() => Article)
  @Column({ type: DataType.INTEGER })
  articleId: number;

  @BelongsTo(() => Article)
  article: Article;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
