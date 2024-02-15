import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import ProductModel from './product.model';
import Product from 'src/@domain/product/entity/product.entity';
import ProductRepositoryInterface from 'src/@domain/product/repository/product.repository.interface';

export default class ProductRepository implements ProductRepositoryInterface {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private product: Repository<ProductModel>,
  ) {}

  async find(id: string): Promise<Product> {
    const productInDb = await this.product.findOne({
      where: { id },
    });

    if (!productInDb) {
      throw new Error('Product not found');
    }

    return new Product(productInDb.id, productInDb.name);
  }

  async create(entity: Product): Promise<void> {
    await this.product.save({
      id: entity.id,
      name: entity.name,
      active: entity.active,
    });
  }
}
