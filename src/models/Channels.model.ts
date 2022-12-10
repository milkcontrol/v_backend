import {Model, Table, Column, PrimaryKey} from 'sequelize-typescript';

@Table
export default class Channels extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  owner!: string;

  @Column
  name!: string;

  @Column
  otherName!: string;

  @Column
  lastMessageId!: string;

  @Column
  description!: string;

  @Column
  isDelete!: boolean;
}
