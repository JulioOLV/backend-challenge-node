export default class GetCustomerDto {
  id: string;
  first_name: string;
  last_name: string;
  cpf: string;
  birthDate: Date;

  constructor(customer) {
    this.id = customer.id;
    this.first_name = customer.name.firstName;
    this.last_name = customer.name.lastName;
    this.cpf = customer.cpf.value;
    this.birthDate = customer.birthDate;
  }
}
