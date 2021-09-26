import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export default class Users {
  @PrimaryColumn({
    length: 100,
    nullable: false,
  })
  uuid: string;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    length: 100,
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  salt: string;

  @Column({
    length: 20,
    nullable: false,
  })
  mobile_no: string;
}
