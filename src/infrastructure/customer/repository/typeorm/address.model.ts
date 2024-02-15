import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class AddressModel {
  @PrimaryColumn()
  id: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip_code: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
