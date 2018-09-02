/**
 * Controller 层
 */
const userInfoService = require('../services/user-info');

module.exports = {
    async signIn(ctx) {
        let requestDate = ctx.request.body;
        let result = {
            status: false,
            message: '',
            data: null
        };
        let dataResult = await userInfoService.signInService(requestDate);

        if (dataResult) {
            if (requestDate.userName === dataResult.name) {
                result.status = true;
                result.message = ''
            } else {
                result.message = '用户账号密码错误'
            }
        } else {
            result.message = '用户不存在';
        }

        if (requestDate.source === 'form' && result.status === true) {
            let session = ctx.session;
            session.isLogin = true;
            session.userName = dataResult.name;
            session.userId = dataResult.id;

            ctx.redirect('/work');
        } else {
            ctx.body = result;
        }
    },
    async signUp(ctx) {

    },
    async getLoginUserInfo(ctx) {

    }
}