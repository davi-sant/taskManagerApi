import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import { clientRouter } from "./routes/clientRoute.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 3001


// midelwares
app.use(cors())
app.use(json())
app.use("/", clientRouter);

app.listen(port, () => {
    console.log("Server is runnig ⚡🌵")
})
