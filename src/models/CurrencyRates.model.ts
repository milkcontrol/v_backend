import {
  Model,
  Table,
  Column,
  PrimaryKey,
  CreatedAt, UpdatedAt,
} from 'sequelize-typescript';


@Table
export default class currency_rates extends Model {
  @PrimaryKey
  @Column
  location!: string;

  @Column
  rate!: string;

  @CreatedAt
  createdAt!: Date;
  @UpdatedAt
  updatedAt!: Date;
}
