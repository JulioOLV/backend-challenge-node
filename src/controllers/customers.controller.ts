import { Response } from 'express';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { CustomersService } from '../use-cases/customer/customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('api/v1/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res() res: Response,
  ) {
    try {
      await this.customersService.create(createCustomerDto);
      return res.status(201).json({ message: 'Customer created successfully' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.customersService.findOne(id);

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
