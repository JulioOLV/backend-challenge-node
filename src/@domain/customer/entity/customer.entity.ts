import { v4 as uuid } from 'uuid';
import Name from '../value-object/name.value-object';
import Cpf from '../value-object/cpf.value-object';

export default class Customer {
  private readonly _id: string;
  private readonly _name: Name;
  private readonly _cpf: Cpf;
  private readonly _birthDate: Date;
  private _active: boolean;

  constructor(id: string, name: Name, cpf: Cpf, birthDate: Date) {
    this._id = id || uuid();
    this._name = name;
    this._cpf = cpf;
    this._birthDate = birthDate;

    this.validate();
  }

  public get id(): string {
    return this._id;
  }

  public get name(): Name {
    return this._name;
  }

  public get cpf(): Cpf {
    return this._cpf;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public get active(): boolean {
    return this._active;
  }

  public activeCustomer(active: boolean): void {
    this._active = active;
  }

  private validate(): void {
    if (!this._name) {
      throw new Error('Name is required');
    }

    if (!this._cpf) {
      throw new Error('CPF is required');
    }

    if (!this._birthDate) {
      throw new Error('BirthDate is required');
    }

    if (this.checkAgeOfMajority(this._birthDate)) {
      throw new Error('Customer must be 18 years old');
    }
  }

  private checkAgeOfMajority(birthDate: Date): boolean {
    const actualDate = new Date();
    const limitDate = new Date(
      actualDate.getFullYear() - 18,
      actualDate.getMonth(),
      actualDate.getDate(),
    );

    return birthDate >= limitDate;
  }
}
