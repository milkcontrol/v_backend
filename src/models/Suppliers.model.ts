import {
  Model,
  Table,
  Column,
  PrimaryKey,
  HasOne,
  AutoIncrement,
} from 'sequelize-typescript';
import Profiles from './Profiles.model';

@Table
export default class suppliers extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  // @HasOne(() => Profiles)
  userId!: number;

  @Column
  companyName!: string;

  @Column
  contactFirstName!: string;

  @Column
  contactLastName!: string;

  @Column
  contactTitle!: string;

  @Column
  contactPhone!: string;

  @Column
  contactFax!: number;

  @Column
  contactEmail!: string;

  @Column
  headOfficeAddressId!: string;
}
