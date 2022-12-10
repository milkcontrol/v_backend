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
export default class payments extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uid!: string;

  @IsUUID(4)
  @ForeignKey(() => Users)
  @Column
  userId!: string;

  @Column
  orderId!: string;
  @Column
  orderInfo!: string;
  @Column
  requestId!: string;
  @Column
  amount!: string;
  @Column
  coins!: number;
  @Default(false)
  @Column
  isPartner!: boolean;
  @Column
  extraData?: string;
  @Column
  requestType?: string;
  @Column
  platform!: string;
  @Column
  status!: string;
  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
  @BelongsTo(() => Users)
  user!: Users;
}
