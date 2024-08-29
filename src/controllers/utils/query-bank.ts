export const Q_CREATE_USER = `
  INSERT INTO users (name, email, phone, password)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;

export const Q_FIND_ALL = (dbName:string):string => {
    return `SELECT * FROM ${dbName.toLowerCase()}`
}
