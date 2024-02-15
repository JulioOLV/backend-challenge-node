import { v4 as uuid } from 'uuid';

export default class Product {
  private readonly _id: string;
  private readonly _name: string;
  private _active: boolean;

  constructor(id: string, name: string) {
    this._id = id || uuid();
    this._name = name;

    this.validate();
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get active(): boolean {
    return this._active;
  }

  public activeProduct(active: boolean): void {
    this._active = active;
  }

  private validate(): void {
    if (!this._name) {
      throw new Error('Name is required');
    }
  }
}
