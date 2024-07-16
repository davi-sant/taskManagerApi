import express from "express";
import { clientService } from "../service/clientService.js";
export const clientRouter = express.Router();
clientRouter.get("/clients", async function (req, res) {
    console.info("GET/ -> clients", `| STATUS -> ${res.statusCode}`);
    const getClient = await clientService.getClient();
    res.json(getClient.rows).end();
});
clientRouter.get("/clients/:id");
clientRouter.post("/clinets");
clientRouter.put("/clients/:id");
clientRouter.delete("/clients/:id");
