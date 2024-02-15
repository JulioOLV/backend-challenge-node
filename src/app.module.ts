import { Module } from '@nestjs/common';
import { CustomersModule } from './use-cases/customer/customers.module';
import { ProductsModule } from './use-cases/product/products.module';

@Module({
  imports: [CustomersModule, ProductsModule],
})
export class AppModule {}
