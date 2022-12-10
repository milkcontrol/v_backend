import {
  Model,
  Table,
  Column,
  IsUUID,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  Default,
} from 'sequelize-typescript';
import Users from './Users.model';

@Table
export default class coins extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @IsUUID(4)
  @ForeignKey(() => Users)
  @Column
  userId!: string;

  @Default(0)
  @Column
  coins!: number;

  @Default('vnd')
  @Column
  locale!: string;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @BelongsTo(() => Users)
  user!: Users;
}
