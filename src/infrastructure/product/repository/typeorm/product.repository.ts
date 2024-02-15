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
      return null;
    }

    const product = new Product(productInDb.id, productInDb.name);
    product.activeProduct(productInDb.active);

    return product;
  }

  async create(entity: Product): Promise<string> {
    const product = await this.product.save({
      id: entity.id,
      name: entity.name,
      active: entity.active,
    });

    return product.id;
  }
}
