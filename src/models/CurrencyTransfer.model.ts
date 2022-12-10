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
} from 'sequelize-typescript';
import Users from './Users.model';

@Table
export default class currency_transfers extends Model {
  @PrimaryKey
  @Column
  id!: string;

  @IsUUID(4)
  @ForeignKey(() => Users)
  @Column
  userId!: string;
  @Column
  from!: string;

  @Column
  to!: string;

  @Column
  transfer!: string;

  @Column
  received!: string;

  @Column
  transfer_rate!: string;

  @Column
  locale?: string;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @BelongsTo(() => Users)
  user!: Users;
}
