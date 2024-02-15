import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import AddressModel from './address.model';

@Entity()
export default class CustomerModel {
  @PrimaryColumn()
  id: string;

  @Column()
  address_id: string;

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

  @OneToOne(() => AddressModel)
  address: AddressModel;
}
