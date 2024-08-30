export const Q_CREATE_USER = `
  INSERT INTO users (name, email, phone, password)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;

export const Q_FIND_ALL = (dbName:string, column:string = "*"):string => {
    return `SELECT ${column} FROM ${dbName.toLowerCase()}`
};

export enum KeyEnum {
  email = 'email',
  id = 'id'
}

export const Q_FIND_ONE_USER = (key:KeyEnum) => 
  `SELECT id, name, email, phone, password FROM users WHERE ${key} = $1`

export const Q_UPDATE_USERS = (key:string, fields:string[]) => {
  let fieldString = "";
  fields.forEach((item:string, i:any) => {
    if (i < fields.length - 1) fieldString += `${item} = $${item+1},`
    else fieldString += `${item} = $${i + 1}`
  })
  return `UPDATE users SET ${fieldString} WHERE ${key} = $${fields.length + 1} RETURNING id, name, email, phone;`
}