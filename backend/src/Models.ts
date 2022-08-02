import { randInt } from "utils";

export class Post {
    public id: number;
    public title: string;
    public content: string;

    constructor(title: string, content: string) {
        this.id = randInt(0, 100000000);
        this.title = title;
        this.content = content;
    }
}
