export default class Name {
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;

    this.validate();
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  validate(): void {
    if (!this._firstName) {
      throw new Error('First name is required');
    }

    if (!this._lastName) {
      throw new Error('Last name is required');
    }

    if (this._firstName.length < 2) {
      throw new Error('First name must have at least 2 characters');
    }

    if (this._lastName.length < 2) {
      throw new Error('Last name must have at least 2 characters');
    }
  }

  getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}
