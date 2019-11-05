/**
 * serrvice 层
 * 业务层
 */
const userInfoModel = require('../models/user-info');
const validator = require('validator');

module.exports = {
    // 登录业务操作
    async signInService(formData) {
        let resultData = await userInfoModel.signInModel({
            username: formData.username,
            password: formData.password
        });
        console.log('----------services')
        return resultData;
    },
    // 注册业务操作
    async signUpService(userInfo) {
        let resultData = await userInfoModel.signUpModel({
            username: userInfo.username,
            password: userInfo.password,
            email: userInfo.email
        });

        return resultData;
    },
    // 判断用户是否已存在
    async getExist(userInfo) {
        let resultData = await userInfoModel.getExist(userInfo);

        return resultData;
    },
    // 根据用户名查找用户操作
    async getLoginUserInfoService(userName) {

    },
    // 获取article列表
    async getArticlesService(data) {
        let resultData = await userInfoModel.getArticlesModel(data);

        return resultData;
    },
    async getArticleDetailService(id) {
        let resultData = await userInfoModel.getArticleDetailModel(id);;

        return resultData;
    },
    // 获取hot文章列表
    async getHotArticlesService() {
        let resultData = await userInfoModel.getHotArticlesModel();

        return resultData;
    },
    // 注册账号输入校验
    validation(formData) {
        let result = {
            status: false,
            message: ''
        };

        if (!/[a-z0-9\_\-]{6,16}/.test(formData.username)) {
            result.message = '用户名格式错误';
            return result;
        }
        if (!validator.isEmail(formData.email)) {
            result.message = '邮箱格式错误';
            return result;
        }
        if (!/[\w+]{6,16}/.test(formData.password)) {
            result.message = '密码格式错误';
            return result;
        }

        result.status = true;
        return result;
    }
}