import express, { Request, Response } from "express"
import { clientService } from "../service/clientService.js";

export const clientRouter = express.Router();

clientRouter.get("/clients", async function(req: Request, res: Response) {
    console.group("GET/ -> clients", `| STATUS -> ${res.statusCode}`);
    console.groupEnd();
    const getClient = await clientService.getClient()
    res.json(getClient.rows).end()
});

clientRouter.get("/clients/:id");
clientRouter.post("/clinets");
clientRouter.put("/clients/:id");
clientRouter.delete("/clients/:id")
