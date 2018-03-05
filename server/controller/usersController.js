const usersModel = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports = {
  index: async (ctx) => {
    try {
      const users = await usersModel.index();
      ctx.status = 200
      ctx.body = {users}
    } catch (error) {
      ctx.status = 400
      ctx.body = {message: error.message}
    }
  },
  register: async (ctx) => {
    try {
      const email = ctx.request.body.email;
      const password = ctx.request.body.password;
      const repassword = ctx.request.body.repassword;
      const user = await usersModel.findUserByEmail(email);
     if(user || typeof email == 'null'){
       ctx.status = 300
       ctx.body = {message: 'Email had exists'}
     } else{
        if(password !== repassword){
          ctx.status = 301
          ctx.body = {message: 'Repassword was wrong!'}
        } else {
          const hash = bcrypt.hashSync(password,10);
          const data = {
            email,
            pass: hash,
            name: ctx.request.body.name
        }
        const createUser = await usersModel.create(data);
          ctx.status = 200
          ctx.body = createUser
      }
     }
    } catch (error) {
      ctx.status = 400
      ctx.body = {message: error.message}
    }
  },
  update: async (ctx) => {
    try {
      const id = ctx.params.id
      const currentData = await usersModel.findUserByID(id);
      const data = {
        email: ctx.request.body.email || currentData.email
      };
      const createData = await usersModel.update(data, id);
      ctx.status = 200
      ctx.body = createData;
    } catch (error) {
      ctx.status = 400
      ctx.body = {message: error.message}
    }
  },
  delete: async (ctx) => {
    try {
      const id = ctx.params.id;
      const deleteUser = await usersModel.delete(id);
      ctx.status = 200
      ctx.body = deleteUser
    } catch (error) {
      ctx.status = 400
      ctx.body = {message: error.message}
    }
  },
  signin: async (ctx) => {
    try {
      const email = ctx.request.body.email;
      const password = ctx.request.body.password;
      const checkuser = await usersModel.findUserByEmail(email);
      if(!checkuser) {
        ctx.status = 400
        ctx.body = {message: 'This email is not exists!'}
      } else {
        if(!bcrypt.compareSync(password,checkuser.password)){
          ctx.status = 300
          ctx.body = {message: 'Password was wrong!'}
        } else {
          const data = {
            email,
            password: checkuser.password
          }
          const UserLogin = await usersModel.signin(data);
            const token = jwt.sign({UserLogin},'SecretCode');
            ctx.status = 200
            ctx.body = { token }
        }
      }
    } catch (error) {
      ctx.status = 400
      ctx.body = {message: error.message}
    }
  }
}