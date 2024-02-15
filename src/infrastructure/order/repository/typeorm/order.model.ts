import CustomerModel from 'src/infrastructure/customer/repository/typeorm/customer.model';
import ProductModel from 'src/infrastructure/product/repository/typeorm/product.model';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
export default class OrderModel {
  @PrimaryColumn()
  id: string;

  @Column()
  customer_id: string;

  @Column()
  product_id: string;

  @Column()
  quantity: number;

  @Column()
  total: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @OneToOne(() => CustomerModel)
  customer: CustomerModel;

  @OneToOne(() => ProductModel)
  product: ProductModel;
}
