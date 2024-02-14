import Address from './address.value-object';

describe('Address value object unit tests', () => {
  it('should create a valid address', () => {
    const address = new Address(
      'Rua 1',
      '123',
      'Complemento',
      'Cidade',
      'Estado',
      'País',
      '12345678',
    );

    expect(address).toBeDefined();
  });

  it('should throw an error if street is not provided', () => {
    expect(() => {
      new Address(
        '',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '12345678',
      );
    }).toThrow('Street is required');
  });

  it('should throw an error if number is not provided', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '12345678',
      );
    }).toThrow('Number is required');
  });

  it('should throw an error if city is not provided', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        '',
        'Estado',
        'País',
        '12345678',
      );
    }).toThrow('City is required');
  });

  it('should throw an error if state is not provided', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        '',
        'País',
        '12345678',
      );
    }).toThrow('State is required');
  });

  it('should throw an error if country is not provided', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        '',
        '12345678',
      );
    }).toThrow('Country is required');
  });

  it('should throw an error if zip code is not provided', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '',
      );
    }).toThrow('ZipCode is required');
  });

  it('should throw an error if zip code has less than 8 characters', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '1234567',
      );
    }).toThrow('ZipCode must have 8 characters');
  });

  it('should throw an error if zip code has more than 8 characters', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '123456789',
      );
    }).toThrow('ZipCode must have 8 characters');
  });

  it('should throw an error if zip code has non-numeric characters', () => {
    expect(() => {
      new Address(
        'Rua 1',
        '123',
        'Complemento',
        'Cidade',
        'Estado',
        'País',
        '12345675a',
      );
    }).toThrow('ZipCode must have 8 characters');
  });

  it('should return address string', () => {
    const address = new Address(
      'Rua 1',
      '123',
      'Complemento',
      'Cidade',
      'Estado',
      'País',
      '12345678',
    );

    expect(address.toString()).toBe(
      'Rua 1, 123 - Cidade/Estado, País - 12345678, Complemento',
    );
  });
});
