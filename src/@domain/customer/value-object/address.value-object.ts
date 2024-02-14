export default class Address {
  private street: string;
  private number: string;
  private complement: string;
  private city: string;
  private state: string;
  private country: string;
  private zipCode: string;

  constructor(
    street: string,
    number: string,
    complement: string,
    city: string,
    state: string,
    country: string,
    zipCode: string,
  ) {
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zipCode = zipCode;

    this.validate();
  }

  validate(): void {
    if (!this.street) {
      throw new Error('Street is required');
    }

    if (!this.number) {
      throw new Error('Number is required');
    }

    if (!this.city) {
      throw new Error('City is required');
    }

    if (!this.state) {
      throw new Error('State is required');
    }

    if (!this.country) {
      throw new Error('Country is required');
    }

    if (!this.zipCode) {
      throw new Error('ZipCode is required');
    }

    if (this.zipCode.length !== 8) {
      throw new Error('ZipCode must have 8 characters');
    }

    const zipCodePattern = /^[0-9]{8}$/;
    if (!zipCodePattern.test(this.zipCode)) {
      throw new Error('ZipCode must have only numbers');
    }
  }

  toString(): string {
    return `${this.street}, ${this.number} - ${this.city}/${this.state}, ${this.country} - ${this.zipCode}, ${this.complement}`;
  }
}
