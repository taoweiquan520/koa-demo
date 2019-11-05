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
        
    },
    // 获取文章列表
    async getArticlesModel(data) {
        let sql = `
            SELECT * from article as a,category as b where a.category_id = b.category_id and b.name='${data}'
        `;

        let result = await dbUtils.query(sql);

        return result;
    },
    // 获取文章详情
    async getArticleDetailModel(id) {
        let sql = `
            SELECT * from article as a where a.article_id='${id}'
        `;

        let result = await dbUtils.query(sql);

        return result;
    },
    // 获取hot文章列表
    async getHotArticlesModel() {
        let sql = `
            SELECT * from article order by views desc limit 5
        `;

        let result = await dbUtils.query(sql);
        
        return result;
    },
}