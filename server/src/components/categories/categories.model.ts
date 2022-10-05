import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CategoryCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttrs> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  // @ForeignKey(() => User)
  // @Column({ type: DataType.INTEGER })
  // userId: number;

  // @BelongsTo(() => User)
  // author: User;
}
