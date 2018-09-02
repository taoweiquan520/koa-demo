/**
 * db操作，与数据库进行连接
 */
const mysql = require('mysql');
const config = require('../../config/config');
const databaseConfig = config.database;

const pool = mysql.createPool({
    host: databaseConfig.HOST,
    user: databaseConfig.USER,
    password: databaseConfig.PASSWORD,
    database: databaseConfig.DATABASE
})

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }

                    // 关闭db连接
                    connection.release();
                })
            }
        })
    })
}

module.exports = {
    query
}