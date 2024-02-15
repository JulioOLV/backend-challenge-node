export default class Order {
  private readonly _id: string;
  private readonly _customerId: string;
  private readonly _productId: string;
  private _unitPrice: number;
  private _quantity: number;
  private _total: number;
  private readonly _date: Date;

  constructor(
    id: string,
    customerId: string,
    productId: string,
    unitPrice: number,
    quantity: number,
    date: Date,
  ) {
    this._id = id;
    this._customerId = customerId;
    this._productId = productId;
    this._unitPrice = unitPrice;
    this._quantity = quantity;
    this._date = date;

    this.calculateTotal();
    this.validate();
  }

  public get total(): number {
    return this._total;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public addQuantity(quantity: number): void {
    this._quantity += quantity;
    this.validate();
    this.calculateTotal();
  }

  public removeQuantity(quantity: number): void {
    this._quantity -= quantity;
    this.validate();
    this.calculateTotal();
  }

  public changeUnitPrice(price: number): void {
    this._unitPrice = price;
    this.validate();
    this.calculateTotal();
  }

  private validate(): void {
    if (!this._productId) {
      throw new Error('Product id is required');
    }

    if (!this._customerId) {
      throw new Error('Customer id is required');
    }

    if (!this._unitPrice) {
      throw new Error('Price is required');
    }

    if (this._unitPrice <= 0) {
      throw new Error('Price must be greater than 0');
    }

    if (!this._quantity) {
      throw new Error('Quantity is required');
    }

    if (this._quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }

    if (!this._date) {
      throw new Error('Date is required');
    }
  }

  private calculateTotal(): void {
    this._total = this._unitPrice * this._quantity;
  }
}
