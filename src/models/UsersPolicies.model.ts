import {
    Model,
    Table,
    Column,
    IsUUID,
    ForeignKey,
 
  } from 'sequelize-typescript';
  import Users from './Users.model';
  import policies from './Policies.model';

  @Table
  export default class users_policies extends Model {
  
    @IsUUID(4)
    @ForeignKey(() => Users)
    @Column
    userId!: string;
  
    @ForeignKey(() => policies)
    @Column
    policyId!: string;
  }
  