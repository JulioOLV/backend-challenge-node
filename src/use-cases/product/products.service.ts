import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateProductDto } from '../../controllers/dto/create-product.dto';
import ProductRepository from 'src/infrastructure/product/repository/typeorm/product.repository';
import Product from 'src/@domain/product/entity/product.entity';
import GetProductDto from '../../controllers/dto/get-product.dto';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<string> {
    try {
      const product = new Product(uuid(), createProductDto.name);
      product.activeProduct(true);

      return await this.productRepository.create(product);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async findOne(id: string): Promise<GetProductDto | null> {
    try {
      const product = await this.productRepository.find(id);

      if (!product) {
        return null;
      }

      return new GetProductDto(product.id, product.name, product.active);
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
