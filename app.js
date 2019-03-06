const path = require('path');
const Koa = require('koa');
const Pug = require('koa-pug');
const static = require('koa-static');
const router = require('./routes');

const app = new Koa();
const pug = new Pug({
  viewPath: 'views',
  app: app,
});

app.use(static('./public'));
app.use(router.routes());

// app.use(async (ctx, next) => {
//   console.log('Last of all');
//   next();
// });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
