import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { DatabaseModule } from 'src/infrastructure/@shared/typeorm/database.module';
import { customerProviders } from 'src/infrastructure/customer/repository/typeorm/customer.providers';
import CustomerRepository from 'src/infrastructure/customer/repository/typeorm/customer.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomersController],
  providers: [
    ...customerProviders,
    CustomersService,
    {
      provide: CustomerRepository,
      useClass: CustomerRepository,
    },
  ],
})
export class CustomersModule {}
