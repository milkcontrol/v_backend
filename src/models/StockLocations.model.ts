import {
  Model,
  Table,
  Column,
  Default,
  ForeignKey,
} from 'sequelize-typescript';


@Table
export default class stock_locations extends Model {
  @Column
  name?: string;

  @Column
  abbr?: string;

  @Default(false)
  @Column
  default!: boolean;

  @Column
  address1?: string;

  @Column
  address2?: string;

  @Column
  cityId?: number;

  @Column
  stateId?: number;

  @Column
  zipcode?: string;

  @Column
  phone?: number;

  @Default(true)
  @Column
  active?: boolean;

  @Default(false)
  @Column
  backorderableDefault?: boolean;

  @Default(true)
  @Column
  propagateAllVariants?: boolean;

  @Column
  adminName?: string;

}
