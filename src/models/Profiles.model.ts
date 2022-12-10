import {
  Model,
  Table,
  Column,
  HasOne,
  IsUUID,
  Default,
  DataType, HasMany,
} from 'sequelize-typescript';
import Users from './Users.model';
import Banks from './Banks.model';
@Table
export default class profiles extends Model {
  @Column
  publicId!: string;

  @Column
  displayName?: string;

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column({
    type: DataType.TINYINT,
  })
  genderTypeId!: number;

  @Column
  identityNumber?: string;

  @Column
  dateRelease?: string;

  @Column
  placeRelease?: string;

  @Column
  identityImageOne?: string;

  @Column
  identityImageTwo?: string;

  @Column
  identityImageThree?: string;

  @Column
  phoneNumber?: string;

  @Column
  email?: string;

  @Column
  birthday?: Date;

  @Column({
    type: DataType.TINYINT,
  })
  @Default(false)
  @Column
  isSearch?: number;

  @Column
  shipAddressId?: number;

  @Column
  billAddressId?: number;

  @Column
  language?: string;

  @Column
  height?: number;

  @Column
  width?: number;

  @Column
  bloodTypeId?: number;

  @Column
  maritalStatus?: string;

  @Column
  education?: string;

  @Column
  job?: string;

  @Column
  interests?: string;

  @Column
  talent?: string;

  @Column
  protectorId?: number;

  @Column
  parentId?: string;

  @Column
  favouriteCount!: number;

  @Column
  followCount!: number;

  @Column
  friendCount!: number;

  @Column
  stripeCustomerId?: string;

  @Column
  birthPlaceAddressId?: string;

  @Column
  currentAddressId?: string;

  @Column({
    type: DataType.TINYINT,
  })
  @Default(false)
  @Column
  isGoogle?: number;

  @Column({
    type: DataType.TINYINT,
  })
  @Default(false)
  @Column
  isFacebook?: number;

  @HasOne(() => Users)
  users!: Users[];

  @HasMany(() => Banks)
  banks!: Banks[];


}
