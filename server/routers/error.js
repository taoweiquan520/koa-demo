/**
 * error路由
 */
const Router = require('koa-router');
const errorController = require('../controllers/error');

const error = new Router();

module.exports = error.get('/', errorController);