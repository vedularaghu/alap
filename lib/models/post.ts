import User from "./user";

export default class Post {
  public user:User;
  public message:string;
  public createdAt:Date;

  constructor(user:User, msg:string) {
    this.user = user;
    this.message = msg;
    this.createdAt = new Date();
  }
}
