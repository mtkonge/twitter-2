import { api } from "./api";
import cors from "cors";
import express, { Request, Response } from "express";
import { MemoryDb } from "./MemoryDb";

const PORT = 8000;

const main = async () => {

    const app = express(); //create express app

    const database = new MemoryDb();
    app.use(cors()); //enables cors
    app.use(express.json()); //enables use of json in requests

    app.use("/api", api(database))
    app.use('/', express.static('./public'));

    app.listen(PORT, () => console.log("express hosted on port:", PORT)) //starts the express app with port PORT
}
main();