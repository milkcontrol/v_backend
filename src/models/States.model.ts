import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey, HasOne,
} from 'sequelize-typescript';

import Countries from "./Countries.model";
import Cities from "./Cities.model";
import Addresses from "./Addresses.model";

@Table
export default class states extends Model {
  @Column
  name?: string;

  @ForeignKey(() => Countries)
  countryId?: number;

  @BelongsTo(() => Countries)
  countries!: Countries[];

  @Column
  countryCode?: string;

  @Column
  fipsCode?: string;

  @Column
  iso2?: string;

  @Column
  type?: string;

  @Column
  latitude?: number;

  @Column
  longitude?: number;

  @Column
  flag?: number;

  @Column
  wikiDataId?: string;

  @HasOne(() => Cities)
  cities!: Cities[];

  @HasOne(() => Addresses)
  addresses!: Addresses[];
}
