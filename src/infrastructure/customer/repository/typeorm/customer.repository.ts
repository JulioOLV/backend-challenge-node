import Customer from 'src/@domain/customer/entity/customer.entity';
import CustomerModel from './customer.model';
import CustomerRepositoryInterface from 'src/@domain/customer/repository/customer-repository.interface';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import CustomerFactory from 'src/@domain/customer/factory/customer.factory';

export default class CustomerRepository implements CustomerRepositoryInterface {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customer: Repository<CustomerModel>,
  ) {}

  async find(id: string): Promise<Customer> {
    const customerInDb = await this.customer.findOne({
      where: { id },
    });

    if (!customerInDb) {
      return null;
    }

    return CustomerFactory.create({
      id: customerInDb.id,
      firstName: customerInDb.first_name,
      lastName: customerInDb.last_name,
      cpf: customerInDb.document,
      birthDate: customerInDb.birthdate,
      active: customerInDb.active,
    });
  }

  async create(entity: Customer): Promise<string> {
    const customer = await this.customer.save({
      id: entity.id,
      first_name: entity.name.firstName,
      last_name: entity.name.lastName,
      document: entity.cpf.value,
      birthdate: entity.birthDate,
      active: entity.active,
    });

    return customer.id;
  }
}
