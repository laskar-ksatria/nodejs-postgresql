const {config} = require("dotenv");
const pg = require("pg");

const {Pool} = pg;
config();

const postgres = new Pool({
    user: "postgres", 
    host: "localhost",
    database: "laskar-db",
    password: "Bongkibong",
    port: 5432
});

const dbQueryRoles = `
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);
`

const dbUserRoles = `
CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    role_id INT REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);
`

 const insertRole = async (roleName) => {
    const query = 'INSERT INTO roles (role_name) VALUES ($1) RETURNING id, role_name';
    const values = [roleName];
    try {
      const result = await postgres.query(query, values);
      return result.rows[0]; // Mengembalikan data yang baru dimasukkan
    } catch (err) {
      console.error('Error executing query', err);
      throw err;
    }
  };
  

const Create = async () => {
    try {
        await postgres.connect();
        await insertRole("admin");
        await insertRole("developer");
        await insertRole("owner");
        await insertRole("viewer");
        await insertRole("user");
        console.log("Sucess!!");
    } catch (error) {
        console.log(error);
    }
};

Create();