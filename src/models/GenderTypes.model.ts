import {Model, Table, Column} from 'sequelize-typescript';

@Table
export default class gender_types extends Model {
  @Column
  name!: string;
}
