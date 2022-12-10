import {Model, Table, Column, DataType} from 'sequelize-typescript';

@Table
export default class specific_banks extends Model<specific_banks> {
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  branchName!: string;
}
