/**
 * work路由
 * warning：work.get('/')为二级路由，必须与一级路由叠加
 */
const Router = require('koa-router');
const workController = require('../controllers/work');

const work = new Router();

module.exports = work.get('/', workController);