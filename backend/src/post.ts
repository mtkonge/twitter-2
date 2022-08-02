import { Database } from "Database";
import { Request, Response, Router } from "express";
import { Post } from "Models";


export const postApiRoutes = (router: Router, database: Database) => {

    router.post("/createpost", async (req: Request, res: Response) => {

        const title = req.body.title;
        const content = req.body.content;

        if (title.length < 1 || title.length > 100) 
            return res.json({msg: "Title invalid"});
        
        if (content.length > 500) 
            return res.json({msg: "Content too long"});
        
        const post = new Post(title, content)
        
        await database.addPost(post)
    });
    router.post("/posts", async (res: Response) => {
        
        return res.json({posts: await database.getAllPosts()})
        
    });
}