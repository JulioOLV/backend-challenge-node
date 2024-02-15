import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tb_customer')
export default class CustomerModel extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  document: string;

  @Column()
  birthdate: Date;

  @Column()
  active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
