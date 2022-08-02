import { Post } from "Models";


export abstract class Database {

    public abstract addPost: (post: Post) => Promise<Post>;
    public abstract getAllPosts: () => Promise<Post[]>;

}