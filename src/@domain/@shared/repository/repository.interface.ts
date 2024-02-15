export default interface RepositoryInterface<T> {
  create(entity: T): Promise<string>;
  find(id: string): Promise<T>;
}
