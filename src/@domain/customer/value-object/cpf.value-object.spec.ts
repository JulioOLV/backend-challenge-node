import Cpf from './cpf.value-object';

describe('CPF value object unit tests', () => {
  it('should create a valid CPF', () => {
    const cpf = new Cpf('12345678901');

    expect(cpf).toBeDefined();
  });

  it('should throw an error if CPF is not provided', () => {
    expect(() => {
      new Cpf('');
    }).toThrow('CPF is required');
  });

  it('should throw an error if CPF is not valid', () => {
    expect(() => {
      new Cpf('1234567890');
    }).toThrow('CPF must have 11 characters');
  });

  it('should throw an error if CPF not only numbers', () => {
    expect(() => {
      new Cpf('1234567890a');
    });
  });
});
