import Repository from "./repository";
import User from "../models/user";
import {Service} from "typedi";

@Service()
class UserRepository extends Repository<User>{
  /**
   *
   * @param {User} user
   * @return Promise
   */
  persist(user:User) {
    const query = ('INSERT INTO user (id, first_name, last_name, email, password, avatar)' +
      'VALUES (?,?,?,?,?,?)');
    const params = [user.id, user.firstName, user.lastName, user.email, user.password, user.avatar];
    return this.client.execute(query, params, { prepare: true });
  }

  findById(id:any) {
    const query = 'SELECT * FROM user WHERE id = ?';
    const params = [id];
    const result = this.client.execute(query, params, { prepare: true });
    return new User();

  }

  findBy(conditions: any): Array<User> {
    return [];
  }

  remove(user:User) {
    const query = ('DELETE FROM user WHERE id = ?');
    const params = [user.id];
    return this.client.execute(query, params, { prepare: true });
  }
}
