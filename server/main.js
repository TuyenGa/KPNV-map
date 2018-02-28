const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

var router = Router();


app.use(logger());
app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
	ctx.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	ctx.set("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	await next()
})

require('./routes/router')(router);

app.use(router.routes());
app.use(router.allowedMethods());

const port = 10004;

app.listen(port, () => {
  console.log(`Server start at http://localhost:${port}`)
})
