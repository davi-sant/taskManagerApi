import { QueryResult } from "pg";
import { db } from "../infra/database.js";
import { IClient } from "../../interface/clientInterface.js";

export const clientData = {
    getClient: (): Promise<QueryResult<IClient>> => {
        return db.query(`select * from client;`)
    }
}
