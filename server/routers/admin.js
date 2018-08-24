const Router = require('koa-router');
const adminController = require('../controllers/admin');

const admin = new Router();

module.exports = admin.get('/', adminController);