import { db } from "../infra/database.js";
export const clientData = {
    getClient: () => {
        return db.query(`select * from client;`);
    }
};
