module.exports = (router) => {

  require('./userRouter')(router)
  return router;
}