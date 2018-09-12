/**
 * model 层
 * 创造sql语句
 */
const dbUtils = require('../utils/db-util');

module.exports = {
    async signInModel(formData) {
        let sql = `
            SELECT * from user where username = "${formData.name}" and password = "${formData.password}" limit 1
        `;

        let result = dbUtils.query(sql);

        if (Array.isArray(result) && result.length > 0) {
            result = result[0];
        } else {
            result = null;
        }

        return result;
    },
    async signUpModel(userInfo) {
        let sql = `
            INSERT 
        `;
    },
    async getLoginUserInfoModel(formData) {
        
    }
}
