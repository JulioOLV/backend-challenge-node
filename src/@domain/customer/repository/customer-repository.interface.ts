import Customer from '../entity/customer.entity';
import RepositoryInterface from '../../@shared/repository/repository.interface';

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}
