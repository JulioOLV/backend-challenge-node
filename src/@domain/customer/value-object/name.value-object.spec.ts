import Name from './name.value-object';

describe('Name value object unit tests', () => {
  it('should create a valid name', () => {
    const name = new Name('First Name', 'Last Name');

    expect(name).toBeDefined();
  });

  it('should throw an error if first name is not provided', () => {
    expect(() => {
      new Name('', 'Last Name');
    }).toThrow('First name is required');
  });

  it('should throw an error if last name is not provided', () => {
    expect(() => {
      new Name('First Name', '');
    }).toThrow('Last name is required');
  });

  it('should throw an error if first name is not valid', () => {
    expect(() => {
      new Name('F', 'Last Name');
    }).toThrow('First name must have at least 2 characters');
  });

  it('should throw an error if last name is not valid', () => {
    expect(() => {
      new Name('First Name', 'L');
    }).toThrow('Last name must have at least 2 characters');
  });

  it('should return the full name', () => {
    const name = new Name('First Name', 'Last Name');

    expect(name.getFullName()).toBe('First Name Last Name');
  });
});
