import { Response } from 'express';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Res() res: Response,
  ) {
    try {
      await this.productsService.create(createProductDto);
      return res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

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
