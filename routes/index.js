const Router = require('koa-router');
const router = new Router();
const controllers = require('../controllers');

router.get('/', controllers.index);
router.get('/users', controllers.users);
router.get('/users/:id', controllers.user);

module.exports = router;
