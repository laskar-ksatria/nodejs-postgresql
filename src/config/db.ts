import pg from 'pg';
import { config } from 'dotenv';


config();
const {Pool} = pg;

const postgres = new Pool({
    user: `${process.env.DB_USER}`, 
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: Number(`${process.env.DB_PORT}`)
});

export default postgres;