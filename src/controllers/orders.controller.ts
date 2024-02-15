import { Response } from 'express';
import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { OrdersService } from '../use-cases/order/orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiTags('Orders')
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Res() res: Response) {
    try {
      const orderId = await this.ordersService.create(createOrderDto);
      return res.status(201).json({ orderId });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }

  @ApiTags('Orders')
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.ordersService.findOne(id);

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
