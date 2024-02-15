import Customer from '../entity/customer.entity';
import Cpf from '../value-object/cpf.value-object';
import Name from '../value-object/name.value-object';

interface CustomerProps {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  birthDate: Date;
  active: boolean;
}

export default class CustomerFactory {
  static create(customerProps: CustomerProps): Customer {
    const cpf = new Cpf(customerProps.cpf);

    const name = new Name(customerProps.firstName, customerProps.lastName);

    const customer = new Customer(
      customerProps.id,
      name,
      cpf,
      new Date(customerProps.birthDate),
    );
    customer.activeCustomer(customerProps.active);

    return customer;
  }

  static createAll(customersProps: CustomerProps[]): Customer[] {
    return customersProps.map((customerProps) => this.create(customerProps));
  }
}
