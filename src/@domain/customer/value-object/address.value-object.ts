export default class Address {
  private _street: string;
  private _number: string;
  private _complement: string;
  private _city: string;
  private _state: string;
  private _country: string;
  private _zipCode: string;

  constructor(
    street: string,
    number: string,
    complement: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
  ) {
    this._street = street;
    this._number = number;
    this._complement = complement;
    this._city = city;
    this._state = state;
    this._country = country;
    this._zipCode = zipCode;

    this.validate();
  }

  public get street(): string {
    return this._street;
  }

  public get number(): string {
    return this._number;
  }

  public get complement(): string {
    return this._complement;
  }

  public get city(): string {
    return this._city;
  }

  public get state(): string {
    return this._state;
  }

  public get country(): string {
    return this._country;
  }

  public get zipCode(): string {
    return this._zipCode;
  }

  validate(): void {
    if (!this._street) {
      throw new Error('Street is required');
    }

    if (!this._number) {
      throw new Error('Number is required');
    }

    if (!this._city) {
      throw new Error('City is required');
    }

    if (!this._state) {
      throw new Error('State is required');
    }

    if (!this._country) {
      throw new Error('Country is required');
    }

    if (!this._zipCode) {
      throw new Error('ZipCode is required');
    }

    if (this._zipCode.length !== 8) {
      throw new Error('ZipCode must have 8 characters');
    }

    const zipCodePattern = /^[0-9]{8}$/;
    if (!zipCodePattern.test(this._zipCode)) {
      throw new Error('ZipCode must have only numbers');
    }
  }

  toString(): string {
    return `${this._street}, ${this._number} - ${this._city}/${this._state}, ${this._country} - ${this._zipCode}, ${this._complement}`;
  }
}
