/**
 * restful api 子路由
 */
const router = require('koa-route')();
const userInfoController = require('../controllers');

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signOut.json', userInfoController.signOut)

module.exports = routers;