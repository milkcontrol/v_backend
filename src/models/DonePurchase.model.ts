import {
  Model,
  Table,
  Column,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  Default,
} from 'sequelize-typescript';
import Users from './Users.model';

@Table
export default class done_purchase extends Model {
  @PrimaryKey
  @ForeignKey(() => Users)
  @Column
  id!: string;

  @Column
  userId!: string;

  @Column
  amount!: number;

  @Default('stripe')
  @Column
  platform!: number;

  @Default('usd')
  @Column
  currency!: number;

  @Column
  extraData?: string;

  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @BelongsTo(() => Users)
  user!: Users;
}
