import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Train_Data {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 100,
    nullable: false,
  })
  train: string;

  @Column({
    length: 100,
    nullable: false,
  })
  unique_id: string;

  @Column({
    nullable: false,
  })
  axle_r: string;

  @Column({
    nullable: false,
  })
  temp_r: string;

  @Column({
    length: 255,
    nullable: false,
  })
  axle_l: string;

  @Column({
    length: 255,
    nullable: false,
  })
  temp_l: string;

  @Column({
    length: 255,
    nullable: false,
  })
  date: string;

  @Column({
    length: 255,
    nullable: false,
  })
  time: string;
}
