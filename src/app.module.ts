import { Module } from '@nestjs/common';
import { CustomersModule } from './use-cases/customer/customers.module';
import { ProductsModule } from './use-cases/product/products.module';
import { OrdersModule } from './use-cases/order/orders.module';

@Module({
  imports: [CustomersModule, ProductsModule, OrdersModule],
})
export class AppModule {}
