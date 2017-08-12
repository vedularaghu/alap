export default class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public avatar: string;

  constructor() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.avatar = '';
  }
}
