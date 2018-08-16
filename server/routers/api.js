/**
 * restful api 子路由
 */
const Router = require('koa-router');
const userInfoController = require('../controllers');
const router = new Router();

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signOut.json', userInfoController.signOut)

module.exports = routers;