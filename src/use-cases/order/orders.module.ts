import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from '../../controllers/orders.controller';
import { DatabaseModule } from 'src/infrastructure/@shared/typeorm/database.module';
import OrderRepository from 'src/infrastructure/order/repository/typeorm/order.repository';
import { orderProviders } from 'src/infrastructure/order/repository/typeorm/order.providers';
import ProductRepository from 'src/infrastructure/product/repository/typeorm/product.repository';
import CustomerRepository from 'src/infrastructure/customer/repository/typeorm/customer.repository';
import { productProviders } from 'src/infrastructure/product/repository/typeorm/product.providers';
import { customerProviders } from 'src/infrastructure/customer/repository/typeorm/customer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [
    ...orderProviders,
    ...productProviders,
    ...customerProviders,
    OrdersService,
    {
      provide: OrderRepository,
      useClass: OrderRepository,
    },
    {
      provide: ProductRepository,
      useClass: ProductRepository,
    },
    {
      provide: CustomerRepository,
      useClass: CustomerRepository,
    },
  ],
})
export class OrdersModule {}
