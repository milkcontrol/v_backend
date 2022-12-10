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
export default class dones extends Model {
  @IsUUID(4)
  @PrimaryKey
  @ForeignKey(() => Users)
  @Column
  userId!: string;

  @Default(0)
  @Column
  dones!: number;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @BelongsTo(() => Users)
  user!: Users;
}
