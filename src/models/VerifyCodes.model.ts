import {
  Model,
  Table,
  Column,
  IsUUID,
  Default,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Users from './Users.model';

@Table
export default class verify_codes extends Model {
  @ForeignKey(() => Users)
  @IsUUID(4)
  @Column
  userId!: string;

  @Column
  code!: string;

  @Default(0)
  @Column
  verifyType!: number;

  @Default(false)
  @Column
  isReject!: boolean;

  @BelongsTo(() => Users)
  Users!: Users[];
}
