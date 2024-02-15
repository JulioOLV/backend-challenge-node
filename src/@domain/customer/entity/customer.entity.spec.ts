import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import Customer from './customer.entity';
import Name from '../value-object/name.value-object';
import Cpf from '../value-object/cpf.value-object';

describe('Customer entity unit tests', () => {
  it('should create a valid customer', () => {
    const customer = new Customer(
      uuid(),
      new Name(faker.person.firstName(), faker.person.lastName()),
      new Cpf('12345678901'),
      faker.date.birthdate({ min: 18, mode: 'age' }),
    );

    expect(customer).toBeDefined();
  });

  it('should throw an error if name is not provided', () => {
    expect(() => {
      new Customer(
        uuid(),
        null,
        new Cpf('12345678901'),
        faker.date.birthdate({ min: 18, mode: 'age' }),
      );
    }).toThrow('Name is required');
  });

  it('should throw an error if CPF is not provided', () => {
    expect(() => {
      new Customer(
        uuid(),
        new Name(faker.person.firstName(), faker.person.lastName()),
        null,
        faker.date.birthdate({ min: 18, mode: 'age' }),
      );
    }).toThrow('CPF is required');
  });

  it('should throw an error if birthDate is not provided', () => {
    expect(() => {
      new Customer(
        uuid(),
        new Name(faker.person.firstName(), faker.person.lastName()),
        new Cpf('12345678901'),
        null,
      );
    }).toThrow('BirthDate is required');
  });

  it('should throw an error if customer is not 18 years old', () => {
    expect(() => {
      new Customer(
        uuid(),
        new Name(faker.person.firstName(), faker.person.lastName()),
        new Cpf('12345678901'),
        faker.date.future(),
      );
    }).toThrow('Customer must be 18 years old');
  });

  it('should active the customer', () => {
    const customer = new Customer(
      uuid(),
      new Name(faker.person.firstName(), faker.person.lastName()),
      new Cpf('12345678901'),
      faker.date.birthdate({ min: 18, mode: 'age' }),
    );

    customer.activeCustomer(true);

    expect(customer).toBeDefined();
    expect(customer.active).toBe(true);
  });
});
