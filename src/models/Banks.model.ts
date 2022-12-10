import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Profiles from './Profiles.model';


@Table
export default class banks extends Model {
  @ForeignKey(() => Profiles)
  userId?: string;

  @Column
  specificBankId?: number;

  @Column
  accountNumber?: number;

  @Column
  owner?: string;

  @BelongsTo(() => Profiles)
  profiles!: Profiles[];

}
