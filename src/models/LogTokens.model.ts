import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  IsUUID,
} from 'sequelize-typescript';
import Tokens from './Tokens.model';

@Table
export default class log_tokens extends Model {
  @IsUUID(4)
  @ForeignKey(() => Tokens)
  @Column
  tokenId!: string;

  @Column
  userAgent?: string;

  @Column
  ipAddress?: string;

  @Column
  ipAddressV6?: string;

  @BelongsTo(() => Tokens)
  token!: Tokens;
}
