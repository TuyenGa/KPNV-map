const usersController = require('../controller/usersController');

module.exports = (router) => {

  router.get('/users',usersController.index)

  router.post('/users',usersController.create)

  router.put('/users/:id/update',usersController.update)

  router.delete('/users/:id/delete',usersController.delete)

  return router;
}