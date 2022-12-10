import {Model, Table, Column} from 'sequelize-typescript';

@Table
export default class blood_types extends Model {
  @Column
  name!: string;
}
