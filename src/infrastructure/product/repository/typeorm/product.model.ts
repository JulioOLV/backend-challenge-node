import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class ProductModel {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  active: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
