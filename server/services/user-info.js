/**
 * serrvice 层
 * 业务层
 */
const userInfoModel = require('../models/user-info');

module.exports = {
    // 登录业务操作
    async signInService(formData) {
        let resultData = await userInfoModel.signInModel({
            name: formData.username,
            password: formData.password
        });

        return resultData;
    },
    // 注册业务操作
    async signUpService(userInfo) {
        let resultData = await userInfoModel.signUpModel({
            name: formData.username,
            password: formData.password,
            email: formData.email
        });

        return resultData;
    },
    // 根据用户名查找用户操作
    async getLoginUserInfoService(userName) {

    }
}