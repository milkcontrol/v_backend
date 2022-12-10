import {Model, Table, Column} from 'sequelize-typescript';

@Table
export default class protectors extends Model {
  @Column
  name!: string;
}
