export default class GetOrderDto {
  id: string;
  customerId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  total: number;
  date: Date;

  constructor(
    id: string,
    customerId: string,
    productId: string,
    quantity: number,
    unitPrice: number,
    total: number,
    date: Date,
  ) {
    this.id = id;
    this.customerId = customerId;
    this.productId = productId;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = total;
    this.date = date;
  }
}
