import pkg from 'pg';
import dotenv from "dotenv";
dotenv.config();
const { Pool } = pkg;
export const db = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASEPORT ? parseInt(process.env.DATABASEPORT, 10) : undefined
});
