const {db} = require('../pgp');

class Users {
  index(){
    return db.any(`
      SELECT
      id,
      email,
      name,
      password,
      created_at,
      updated_at
      FROM users
    `)
  }
  create(data){
    console.log(data)
    return db.one({
      name: 'add-user',
      text: `
        Insert Into users(email,password,name) values ($1,$2,$3) returning *
      `,
      values: [
        data.email,
        data.pass,
        data.name
      ]
    })
  }
  update(data,id){
    return db.one({
      name: 'update-Data',
      text: `
        Update users
        SET
        email = $1
        WHERE id = $2

        returning *
      `,
      values: [
        data.email,
        id
      ]
    })
  }
  findUserByID(id){
    return db.oneOrNone(`
      SELECT
      id,
      email,
      password,
      name

      FROM users
      WHERE id = $1
    `,[id])
  }
  findUserByEmail(email){
    return db.oneOrNone(`
      SELECT
      id,
      email,
      password,
      name

      FROM users

      WHERE email = $1
    `,[email])
  }
  delete(id){
    return db.one(`
      DELETE FROM users WHERE id = $1 returning *
    `,[id])
  }
  signin(data){
    return db.oneOrNone({
      name: 'Login',
      text: `
        SELECT
        email,
        password,
        name

        FROM users

        WHERE email = $1 and password = $2

      `,
      values: [
        data.email,
        data.password
      ]
    })
  }
}

module.exports = new Users();