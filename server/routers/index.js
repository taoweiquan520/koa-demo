/**
 * 整合路由
 * warning: router.use('/admin) 此处的/admin为一级路由
 */
const Router = require('koa-router');
const router = new Router();

const home = require('./home');
const api = require('./api');
const admin = require('./admin');
const work = require('./work');
const error = require('./error');

router.use('/', home.routes(), home.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/work', work.routes(), work.allowedMethods());
router.use('/error', error.routes(), error.allowedMethods());

module.exports = router;