/**
 * restful api 子路由
 */
const Router = require('koa-router');
const userInfoController = require('../controllers/user-info');
const router = new Router();

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)
    .post('/article/getArticles.json', userInfoController.getArticles)
    .post('/article/getArticleDetail.json', userInfoController.getArticleDetail)
    .get('/article/getHotList.json', userInfoController.getHotList);

module.exports = routers;