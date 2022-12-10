import {
  Model,
  Table,
  Column,
  IsUUID,
  PrimaryKey,
  ForeignKey,
  Default,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import LogTokens from './LogTokens.model';
import Users from './Users.model';

@Table
export default class tokens extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid!: string;

  @IsUUID(4)
  @ForeignKey(() => Users)
  @Column
  userId!: string;

  @Default(false)
  @Column
  isRevoked?: boolean;

  @Column
  refreshToken?: string;

  @BelongsTo(() => Users)
  user!: Users;

  @HasMany(() => LogTokens)
  logTokens!: LogTokens[];
}
