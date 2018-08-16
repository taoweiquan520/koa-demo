const Router = require('koa-router');
const index = require('../controllers/index');

const home = new Router();

module.exports = home.get('/', index);