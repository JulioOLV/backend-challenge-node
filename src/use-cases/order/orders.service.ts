import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateOrderDto } from '../../controllers/dto/create-order.dto';
import Order from 'src/@domain/order/entity/order.entity';
import OrderRepository from 'src/infrastructure/order/repository/typeorm/order.repository';
import GetOrderDto from 'src/controllers/dto/get-order.dto';
import CustomerRepository from 'src/infrastructure/customer/repository/typeorm/customer.repository';
import ProductRepository from 'src/infrastructure/product/repository/typeorm/product.repository';

@Injectable()
export class OrdersService {
  constructor(
    private orderRepository: OrderRepository,
    private customerRepository: CustomerRepository,
    private productRepository: ProductRepository,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<string> {
    try {
      const customer = await this.customerRepository.find(
        createOrderDto.customerId,
      );

      if (!customer) {
        throw new Error('Customer not found');
      }

      const product = await this.productRepository.find(
        createOrderDto.productId,
      );

      if (!product) {
        throw new Error('Product not found');
      }

      const order = new Order(
        uuid(),
        createOrderDto.customerId,
        createOrderDto.productId,
        createOrderDto.unitPrice,
        createOrderDto.quantity,
      );

      return await this.orderRepository.create(order);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async findOne(id: string): Promise<GetOrderDto | null> {
    try {
      const order = await this.orderRepository.find(id);

      if (!order) {
        return null;
      }

      return new GetOrderDto(
        order.id,
        order.customerId,
        order.productId,
        order.quantity,
        order.unitPrice,
        order.total,
        order.date,
      );
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
