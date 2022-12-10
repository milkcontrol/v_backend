import {
  Model,
  Table,
  Column,
} from 'sequelize-typescript';

@Table
export default class policies extends Model {

  @Column
  policyType!: number;

  @Column
  content!: string;

  @Column
  status!: number;
}
