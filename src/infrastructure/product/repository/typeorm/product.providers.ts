import { DataSource } from 'typeorm';
import ProductModel from './product.model';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductModel),
    inject: ['DATA_SOURCE'],
  },
];
