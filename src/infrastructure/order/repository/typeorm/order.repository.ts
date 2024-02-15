import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import OrderModel from './order.model';
import Order from 'src/@domain/order/entity/order.entity';
import OrderRepositoryInterface from 'src/@domain/order/repository/order-repository.interface';

export default class OrderRepository implements OrderRepositoryInterface {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private order: Repository<OrderModel>,
  ) {}

  async find(id: string): Promise<Order> {
    const orderInDb = await this.order.findOne({
      where: { id },
    });

    if (!orderInDb) {
      throw new Error('Order not found');
    }

    return new Order(
      orderInDb.id,
      orderInDb.customer_id,
      orderInDb.product_id,
      orderInDb.quantity,
      orderInDb.total,
      orderInDb.created_at,
    );
  }

  async create(entity: Order): Promise<void> {
    await this.order.save({
      id: entity.id,
      customer_id: entity.customerId,
      product_id: entity.productId,
      quantity: entity.quantity,
      total: entity.total,
    });
  }
}
