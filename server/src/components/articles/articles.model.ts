// import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/components/roles/role.model';
import { UserRoles } from 'src/components/roles/user-roles.model';
import { User } from 'src/components/users/user.model';

interface ArticleCreationAttrs {
  title: string;
  content: string;
  mainImage: string;
  authorId: number;
}

@Table({ tableName: 'articles' })
export class Article extends Model<Article, ArticleCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @Column({ type: DataType.STRING })
  mainImage: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
