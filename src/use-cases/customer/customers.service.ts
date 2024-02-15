import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../controllers/dto/create-customer.dto';
import CustomerRepository from 'src/infrastructure/customer/repository/typeorm/customer.repository';
import CustomerFactory from 'src/@domain/customer/factory/customer.factory';
import GetCustomerDto from '../../controllers/dto/get-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const customer = CustomerFactory.create({
        id: null,
        firstName: createCustomerDto.first_name,
        lastName: createCustomerDto.last_name,
        cpf: createCustomerDto.cpf,
        birthDate: createCustomerDto.birthDate,
        active: true,
      });

      await this.customerRepository.create(customer);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: string): Promise<GetCustomerDto | null> {
    try {
      const customer = await this.customerRepository.find(id);

      if (!customer) {
        return null;
      }

      return new GetCustomerDto(customer);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
