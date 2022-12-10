import {Model, Table, Column, PrimaryKey} from 'sequelize-typescript';

@Table
export default class roles_suppliers extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  role!: number;

  @Column
  name!: string;

  @Column
  description!: string;
}
