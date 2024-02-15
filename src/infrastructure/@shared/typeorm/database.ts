import { DataSource } from 'typeorm';
import { CreateTables214820240214 } from './migrations/CreateTables214820240214';
import CustomerModel from 'src/infrastructure/customer/repository/typeorm/customer.model';
import AddressModel from 'src/infrastructure/customer/repository/typeorm/address.model';
import ProductModel from 'src/infrastructure/product/repository/typeorm/product.model';

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
        database: 'backend_challange_node',
        entities: [CustomerModel, AddressModel, ProductModel],
        synchronize: false,
        logging: false,
        migrations: [CreateTables214820240214],
      });

      return dataSource.initialize();
    },
  },
];
