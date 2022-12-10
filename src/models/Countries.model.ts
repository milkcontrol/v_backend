import {
  Model,
  Table,
  Column,
  Default,
  HasOne,
} from 'sequelize-typescript';

import States from "./States.model";
import Cities from "./Cities.model";
import Addresses from "./Addresses.model";

@Table
export default class countries extends Model {

  @Column
  iso2!: string;

  @Column
  iso3!: string;

  @Column
  name?: string;

  @Column
  numericCode?: string;

  @Column
  phonecode?: string;

  @Column
  currency?: string;

  @Column
  currencyName?: string;

  @Column
  currencySymbol?: string;

  @Column
  tld?: string;

  @Column
  native?: string;

  @Column
  region?: string;

  @Column
  subregion?: string;

  @Column
  timezones?: string;

  @Column
  translations?: string;

  @Column
  latitude?: number;

  @Column
  longitude?: number;

  @Column
  emoji?: string;

  @Column
  emojiU?: string;

  @Column
  flag?: number;

  @Column
  wikiDataId?: string;


  @HasOne(() => States)
  states!: States[];

  @HasOne(() => Addresses)
  addresses!: Addresses[];

  @HasOne(() => Cities)
  cities!: Cities[];
}
