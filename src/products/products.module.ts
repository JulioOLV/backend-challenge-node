import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import ProductRepository from 'src/infrastructure/product/repository/typeorm/product.repository';
import { productProviders } from 'src/infrastructure/product/repository/typeorm/product.providers';
import { DatabaseModule } from 'src/infrastructure/@shared/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ...productProviders,
    ProductsService,
    {
      provide: ProductRepository,
      useClass: ProductRepository,
    },
  ],
})
export class ProductsModule {}
