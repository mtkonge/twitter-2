import { Database } from "./Database";
import { Router } from "express";
import { postApiRoutes } from "./post";

export const api = (database: Database) => {
    const router = Router();
    postApiRoutes(router, database)
    return router;
}


