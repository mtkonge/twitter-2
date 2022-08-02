import { Database } from "./Database";
import { Post } from "./Models"

export class MemoryDb extends Database {

    private posts: Post[];

    constructor () {
        super();
        this.posts = [];

    }

    public addPost = async (post: Post) => {
        this.posts.push(post);
        return post;
    }

    public getAllPosts = async () => {
        return this.posts;
    }

}