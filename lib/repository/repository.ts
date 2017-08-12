import {Inject} from 'typedi';
import {Client} from 'cassandra-driver';

export default abstract class Repository<T> {

  @Inject()
  protected client: Client;

  abstract persist(obj: T): void;

  abstract findById(id: any): T | null

  abstract findBy(conditions: any): Array<T>;

  abstract remove(obj: T): void

}

