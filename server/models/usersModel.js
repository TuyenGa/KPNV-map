const {db} = require('../pgp');

class Users {
  index(){
    return db.any(`
      SELECT
      id,
      email
      FROM users
    `)
  }
  create(data){
    console.log(data)
    return db.one({
      name: 'add-user',
      text: `
        Insert Into users(email) values ($1) returning *
      `,
      values: [
        data.email
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
    return db.one(`
      SELECT
      id,
      email
      FROM users
      WHERE id = $1
    `,[id])
  }
  findUserByEmail(email){
    return db.one(`
      SELECT
      id,
      email
      FROM users
      WHERE email = $1
    `,[email])
  }
  delete(id){
    return db.one(`
      DELETE FROM users WHERE id = $1 returning *
    `,[id])
  }
}

module.exports = new Users();