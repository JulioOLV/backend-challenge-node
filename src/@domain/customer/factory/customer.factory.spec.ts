import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import CustomerFactory from './customer.factory';

describe('Customer factory unit tests', () => {
  it('should create a customer with factory', () => {
    // Arrange
    const customerProps = {
      id: uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      cpf: '12345678900',
      birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
      street: faker.location.street(),
      number: faker.number.int().toString(),
      complement: faker.lorem.text(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      zipCode: '12345678',
      active: true,
    };

    // Act
    const customer = CustomerFactory.create(customerProps);

    // Assert
    expect(customer.id).toBe(customerProps.id);
    expect(customer.name.firstName).toBe(customerProps.firstName);
    expect(customer.name.lastName).toBe(customerProps.lastName);
    expect(customer.cpf.value).toBe(customerProps.cpf);
    expect(customer.birthDate).toBe(customerProps.birthDate);
    expect(customer.address.street).toBe(customerProps.street);
    expect(customer.address.number).toBe(customerProps.number);
    expect(customer.address.complement).toBe(customerProps.complement);
    expect(customer.address.city).toBe(customerProps.city);
    expect(customer.address.state).toBe(customerProps.state);
    expect(customer.address.country).toBe(customerProps.country);
    expect(customer.address.zipCode).toBe(customerProps.zipCode);
    expect(customer.active).toBe(customerProps.active);
  });

  it('should create all customers with factory', () => {
    // Arrange
    const customersProps = [
      {
        id: uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        cpf: '12345678900',
        birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
        street: faker.location.street(),
        number: faker.number.int().toString(),
        complement: faker.lorem.text(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipCode: '12345678',
        active: true,
      },
      {
        id: uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        cpf: '12345678900',
        birthDate: faker.date.birthdate({ min: 18, mode: 'age' }),
        street: faker.location.street(),
        number: faker.number.int().toString(),
        complement: faker.lorem.text(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipCode: '12345678',
        active: true,
      },
    ];

    // Act
    const customers = CustomerFactory.createAll(customersProps);

    // Assert
    expect(customers.length).toBe(customersProps.length);
  });
});
