import pg from 'pg';

const {Pool} = pg;

const postgres = new Pool({
    user: `${process.env.DB_USER}`, 
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: Number(`${process.env.DB_PORT}`)
});

export default postgres;


// export const postgre = async () => {
//     const db = new Pool({
//         user: `${process.env.DB_USER}`, 
//         host: `${process.env.DB_HOST}`,
//         database: `${process.env.DB_DATABASE}`,
//         password: `${process.env.DB_PASSWORD}`,
//         port: Number(`${process.env.DB_PORT}`)
//     })
//     return db;
// }