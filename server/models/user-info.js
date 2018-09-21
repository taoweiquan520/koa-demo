/**
 * model 层
 * 创造sql语句
 */
const dbUtils = require('../utils/db-util');
const getNowTime = require('../utils/getDateTime').getNowTime;

module.exports = {
    async signInModel(formData) {
        let sql = `
            SELECT * from user where username = "${formData.username}" limit 1
        `;

        let result = await dbUtils.query(sql);
        console.log('------------models');
        
        if (Array.isArray(result) && result.length > 0) {
            result = result[0];
        } else {
            result = null;
        }

        return result;
    },
    async signUpModel(userInfo) {
        // 账号等级
        const level = 2;
        let sql = `
            INSERT into user(username, password, email, create_time, level) VALUES("${userInfo.username}", "${userInfo.password}", "${userInfo.email}", "${getNowTime()}", "${level}")
        `;
        
        let result = await dbUtils.query(sql);

        return result;
    },
    async getExist(userInfo) {
        let sql = `
            SELECT * from user where username = "${userInfo.username}" or email = "${userInfo.email}" limit 1
        `;

        let result = await dbUtils.query(sql);
        
        if (Array.isArray(result) && result.length > 0) {
            result = result[0];
        } else {
            result = null;
        }
        
        return result;
    },
    async getLoginUserInfoModel(formData) {
        
    }
}