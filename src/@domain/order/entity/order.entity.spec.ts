import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import Order from './order.entity';

describe('Order entity unit tests', () => {
  it('should create a valid order', () => {
    const order = new Order(
      uuid(),
      uuid(),
      uuid(),
      parseFloat(faker.finance.amount()),
      faker.number.int(),
      faker.date.recent(),
    );

    expect(order).toBeDefined();
  });

  it('should throw an error if customer id is not provided', () => {
    expect(() => {
      new Order(
        uuid(),
        null,
        uuid(),
        parseFloat(faker.finance.amount()),
        faker.number.int(),
        faker.date.recent(),
      );
    }).toThrow('Customer id is required');
  });

  it('should throw an error if product id is not provided', () => {
    expect(() => {
      new Order(
        uuid(),
        uuid(),
        null,
        parseFloat(faker.finance.amount()),
        faker.number.int(),
        faker.date.recent(),
      );
    }).toThrow('Product id is required');
  });

  it('should throw an error if price is not provided', () => {
    expect(() => {
      new Order(
        uuid(),
        uuid(),
        uuid(),
        null,
        faker.number.int(),
        faker.date.recent(),
      );
    }).toThrow('Price is required');
  });

  it('should throw an error if quantity is not provided', () => {
    expect(() => {
      new Order(
        uuid(),
        uuid(),
        uuid(),
        parseFloat(faker.finance.amount()),
        null,
        faker.date.recent(),
      );
    }).toThrow('Quantity is required');
  });

  it('should throw an error if price is less than or equal to 0', () => {
    expect(() => {
      new Order(
        uuid(),
        uuid(),
        uuid(),
        -1,
        faker.number.int(),
        faker.date.recent(),
      );
    }).toThrow('Price must be greater than 0');
  });

  it('should throw an error if quantity is less than or equal to 0', () => {
    expect(() => {
      new Order(
        uuid(),
        uuid(),
        uuid(),
        parseFloat(faker.finance.amount()),
        -1,
        faker.date.recent(),
      );
    }).toThrow('Quantity must be greater than 0');
  });

  it('should calculate the total', () => {
    const order = new Order(uuid(), uuid(), uuid(), 10, 2, faker.date.recent());

    expect(order.total).toBe(20);
  });

  it('should add quantity', () => {
    const order = new Order(uuid(), uuid(), uuid(), 10, 2, faker.date.recent());
    order.addQuantity(3);

    expect(order.quantity).toBe(5);
    expect(order.total).toBe(50);
  });

  it('should remove quantity', () => {
    const order = new Order(uuid(), uuid(), uuid(), 10, 5, faker.date.recent());
    order.removeQuantity(3);

    expect(order.quantity).toBe(2);
    expect(order.total).toBe(20);
  });
});
