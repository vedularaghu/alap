import {Service} from "typedi";
import Repository from "./repository";
import Post from "../models/post";

@Service()
class PostRepository extends Repository<Post> {
  persist(obj: Post): void {
  }

  findById(id: any): any | Post {
    return undefined;
  }

  findBy(conditions: any): Array<Post> {
    return [];
  }

  remove(obj: Post): void {
  }
}
