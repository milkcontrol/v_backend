import {
  Model,
  Table,
  Column,
  HasMany,
  IsUUID,
  PrimaryKey,
  Default,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Profiles from './Profiles.model';
import Tokens from './Tokens.model';
import VerifyCodes from './VerifyCodes.model';
import Policies from './Policies.model';

@Table
export default class users extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  uuid!: string;

  @Column
  @ForeignKey(() => Profiles)
  profileId!: number;

  @Column
  username!: string;

  @Column
  password!: string;

  @Column
  streamKey?: string;

  @Default(0)
  @Column
  userType?: number;

  @Default(4)
  @Column
  role!: number;

  @Default(0)
  @Column
  isVerified?: number;

  @Default(false)
  @Column
  isBlocked?: boolean;

  @Default(false)
  @Column
  isDelete!: boolean;

  @HasMany(() => Tokens)
  tokens!: Tokens[];

  @BelongsTo(() => Profiles)
  profiles!: Profiles;

  @HasMany(() => VerifyCodes)
  verifyCodes!: VerifyCodes[];
}
