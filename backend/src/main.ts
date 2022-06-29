import cors from "cors";
import express, { Request, Response } from "express";

const PORT = 8000;

const main = async () => {

    const app = express(); //create express app
    app.use(cors()); //enables cors
    app.use(express.json()); //enables use of json in requests
    
    app.get("/", async (req: Request, res: Response) => { //creates GET request on "/" 

        res.send("<h1>hello world</h1>"); //sends a response with string
        
    })

    app.listen(PORT, () => console.log("express hosted on port:", PORT)) //starts the express app with port PORT
}
main();