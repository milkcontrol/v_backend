import {
  Model,
  Table,
  Column,
  IsUUID,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export default class coins_transfer extends Model {
  @PrimaryKey
  @Column
  id!: number;

  @IsUUID(4)
  @Column
  senderId!: string;

  @IsUUID(4)
  @Column
  receiverId!: string;

  @Column
  coins!: number;

  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
}
