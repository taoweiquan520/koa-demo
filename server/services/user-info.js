/**
 * serrvice 层
 * 用户业务操作
 */
const userInfoModel = require('../models/user-info');

module.exports = {
    // 登录业务操作
    async signInService(formData) {
        let resultData = await userInfoModel.signInModel({
            name: formData.userName,
            password: formData.password
        });

        return resultData;
    },
    // 注册业务操作
    async signUpService(userInfo) {

    },
    // 根据用户名查找用户操作
    async getLoginUserInfoService(userName) {

    }
}