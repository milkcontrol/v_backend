import {
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Countries from "./Countries.model";
import States from "./States.model";
import Cities from "./Cities.model";

@Table
export default class addresses extends Model {
  @Column
  profileId?: number;

  @Column
  address1?: string;

  @Column
  address2?: string;

  @Column
  @ForeignKey(() => Cities)
  cityId?: number;

  @Column
  @ForeignKey(() => States)
  stateId?: number;

  @Column
  @ForeignKey(() => Countries)
  countryId?: number;

  @BelongsTo(() => Countries)
  countries!: Countries[];

  @BelongsTo(() => States)
  states!: States[];

  @BelongsTo(() => Cities)
  cities!: Cities[];

}
