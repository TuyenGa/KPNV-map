const usersController = require('../controller/usersController');

module.exports = (router) => {

  router.get('/users',usersController.index)

  router.post('/users',usersController.register)

  router.put('/users/:id/update',usersController.update)

  router.delete('/users/:id/delete',usersController.delete)

  router.post('/users/login',usersController.signin)

  return router;
}