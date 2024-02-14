export default class Name {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.validate();
  }

  validate(): void {
    if (!this.firstName) {
      throw new Error('First name is required');
    }

    if (!this.lastName) {
      throw new Error('Last name is required');
    }

    if (this.firstName.length < 2) {
      throw new Error('First name must have at least 2 characters');
    }

    if (this.lastName.length < 2) {
      throw new Error('Last name must have at least 2 characters');
    }
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
