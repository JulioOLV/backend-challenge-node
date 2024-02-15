import Customer from '../entity/customer.entity';
import Address from '../value-object/address.value-object';
import Cpf from '../value-object/cpf.value-object';
import Name from '../value-object/name.value-object';

interface CustomerProps {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  birthDate: Date;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  active: boolean;
}

export default class CustomerFactory {
  static create(customerProps: CustomerProps): Customer {
    const address = new Address(
      customerProps.street,
      customerProps.number,
      customerProps.complement,
      customerProps.city,
      customerProps.state,
      customerProps.country,
      customerProps.zipCode,
    );

    const cpf = new Cpf(customerProps.cpf);

    const name = new Name(customerProps.firstName, customerProps.lastName);

    const customer = new Customer(
      customerProps.id,
      name,
      cpf,
      customerProps.birthDate,
    );
    customer.changeHomeAddress(address);
    customer.activeCustomer(customerProps.active);

    return customer;
  }

  static createAll(customersProps: CustomerProps[]): Customer[] {
    return customersProps.map((customerProps) => this.create(customerProps));
  }
}
