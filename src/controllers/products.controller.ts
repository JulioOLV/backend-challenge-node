import { Response } from 'express';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ProductsService } from '../use-cases/product/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiTags('Products')
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() res: Response,
  ) {
    try {
      const productId = await this.productsService.create(createProductDto);
      return res.status(201).json({ productId });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  @ApiTags('Products')
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.productsService.findOne(id);

      if (!response) {
        return res.status(204);
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
