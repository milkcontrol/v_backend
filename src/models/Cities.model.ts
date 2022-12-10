import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey, HasOne,
} from 'sequelize-typescript';
import Countries from "./Countries.model";
import States from "./States.model";
import Addresses from "./Addresses.model";

@Table
export default class cities extends Model {
  @Column
  name?: string;

  @ForeignKey(() => States)
  stateId?: number;

  @Column
  stateCode?: string;

  @ForeignKey(() => Countries)
  countryId?: number;

  @Column
  countryCode?: string;

  @Column
  latitude?: number;

  @Column
  longitude?: number;

  @Column
  flag?: number;

  @Column
  wikiDataId?: string;

  @BelongsTo(() => States)
  States!: States[];

  @BelongsTo(() => Countries)
  Countries!: Countries[];

  @HasOne(() => Addresses)
  addresses!: Addresses[];
}
