export default class Cpf {
  private cpf: string;

  constructor(cpf: string) {
    this.cpf = cpf;

    this.validate();
  }

  validate(): void {
    if (!this.cpf) {
      throw new Error('CPF is required');
    }

    if (this.cpf.length !== 11) {
      throw new Error('CPF must have 11 characters');
    }

    const cpfPattern = /^[0-9]{11}$/;
    if (!cpfPattern.test(this.cpf)) {
      throw new Error('CPF must have only numbers');
    }
  }
}
