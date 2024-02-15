import { DataSource } from 'typeorm';
import CustomerModel from 'src/infrastructure/customer/repository/typeorm/customer.model';
import ProductModel from 'src/infrastructure/product/repository/typeorm/product.model';
import OrderModel from 'src/infrastructure/order/repository/typeorm/order.model';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'backend_challenge_node',
        entities: [CustomerModel, ProductModel, OrderModel],
        synchronize: false,
        logging: false,
      });

      return dataSource.initialize();
    },
  },
];
