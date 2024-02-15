export default class Cpf {
  private _cpf: string;

  constructor(cpf: string) {
    this._cpf = cpf;

    this.validate();
  }

  public get value(): string {
    return this._cpf;
  }

  validate(): void {
    if (!this._cpf) {
      throw new Error('CPF is required');
    }

    if (this._cpf.length !== 11) {
      throw new Error('CPF must have 11 characters');
    }

    const cpfPattern = /^[0-9]{11}$/;
    if (!cpfPattern.test(this._cpf)) {
      throw new Error('CPF must have only numbers');
    }
  }
}
