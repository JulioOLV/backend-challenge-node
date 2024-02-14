import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import Product from './product.entity';

describe('Product entity unit tests', () => {
  it('should create a valid product', () => {
    const product = new Product(uuid(), faker.commerce.productName());

    expect(product).toBeDefined();
  });

  it('should throw an error if name is not provided', () => {
    expect(() => {
      new Product(uuid(), null);
    }).toThrow('Name is required');
  });

  it('should active product', () => {
    const product = new Product(uuid(), faker.commerce.productName());
    product.activeProduct(true);

    expect(product.active).toBe(true);
  });
});
