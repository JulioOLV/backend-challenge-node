import { DataSource } from 'typeorm';
import OrderModel from './order.model';

export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OrderModel),
    inject: ['DATA_SOURCE'],
  },
];
