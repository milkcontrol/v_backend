import {Model, Table, Column, PrimaryKey} from 'sequelize-typescript';

@Table
export default class UsersChannels extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  userId!: string;

  @Column
  channelId!: string;

  @Column
  blocked!: boolean;

  @Column
  isDelete!: boolean;
}
