/**
 * home路由
 * warning: home.get('/') 此处的/为二级路由，必须与一级路由叠加
 */
const Router = require('koa-router');
const homeController = require('../controllers/index');

const home = new Router();

module.exports = home.get('/', homeController);