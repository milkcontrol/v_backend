import {Model, Table, Column, PrimaryKey} from 'sequelize-typescript';

@Table
export default class Messages extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  userId!: string;

  @Column
  channelId!: number;

  @Column
  message!: string;

  @Column
  type!: string;

  @Column
  isDelete!: boolean;
}
