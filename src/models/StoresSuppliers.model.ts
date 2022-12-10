import {Model, Table, Column, PrimaryKey, HasOne} from 'sequelize-typescript';
import SuppliersModel from './Suppliers.model';

@Table
export default class stores_suppliers extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  // @HasOne(() => SuppliersModel)
  supplierId!: number;

  @Column
  storeId!: number;

  @Column
  role!: number;

  @Column
  description!: string;
}
