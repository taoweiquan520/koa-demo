/**
 * Controller 层
 */
const userInfoService = require('../services/user-info');

module.exports = {
    // 登录
    async signIn(ctx) {
        console.log('--------------登录')
        let requestDate = ctx.request.body;
        let result = {
            status: false,
            message: '',
            data: null
        };
        let dataResult = await userInfoService.signInService(requestDate);
        console.log('--------------controller')
        
        if (dataResult) {
            if (requestDate.username === dataResult.username) {
                if (requestDate.password === dataResult.password) {
                    result.status = true;
                    result.message = '登录成功'
                } else {
                    result.message = '密码错误'
                }
            } else {
                result.message = '未知错误'
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
    // 注册
    async signUp(ctx) {
        let requestData = ctx.request.body;
        let result = {
            status: false,
            message: '',
            data: null
        };

        // 字段校验
        let validateResult = userInfoService.validation(requestData);
        
        if (!validateResult.status) {
            result.message = validateResult.message;
            ctx.body = result;
            return ;
        }

        // 数据库判断是否存在
        let exist = await userInfoService.getExist(requestData);
        
        if (exist) {
            if (exist.username == requestData.username || exist.email == requestData.email) {
                result.message = '账号已存在';
                ctx.body = result;
                return ;
            }
        }
        
        // 数据库注册账号
        let dataResult = await userInfoService.signUpService(requestData);

        if (dataResult) {
            result.status = true;
            result.message = '注册成功';
        } else {
            result.message = '系统错误';
        }

        ctx.body = result;
    },
    // 查看用户
    async getLoginUserInfo(ctx) {

    },
    // Article
    // 查看文章列表
    async getArticles(ctx) {
        console.log('--------------获取文章列表');
        let requestDate = ctx.request.body;
        console.log(requestDate)
        const {category = ''} = requestDate;
        let result = {
            status: false,
            message: '',
            data: null
        };
        if (!category) {
            result.message = '文章种类为空';
            ctx.body = result;
            return;
        }

        let dataResult = await userInfoService.getArticlesService(category);
        console.log('--------------controller');

        if (!dataResult) {
            result.data = [];
            result.message = '';
        } else {
            result.status = true;
            result.list = dataResult;
            result.message = 'success';
        }

        ctx.body = result;
    }
}