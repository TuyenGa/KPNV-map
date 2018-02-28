const usersModel = require('../models/usersModel');

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
  create: async (ctx) => {
    try {
      const data = {
        email: ctx.request.body.email
      }
      const createUser = await usersModel.create(data);
        ctx.status = 200
        ctx.body = createUser
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
  }
}