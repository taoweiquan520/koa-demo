const Koa = require('koa');
const path = require('path');
const convert = require('koa-convert');
const views = require('koa-views');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session-minimal');
const MySqlStore = require('koa-mysql-session');

const config = require('../config/config');
const route = require('./routers/index');

const app = new Koa();

// session储存配置
sessionMysqlConfig = {
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST
}

// 后台日志
app.use(convert(logger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

// static
app.use(convert(static(path.join(__dirname, '../static'))));

// 初始化路由
app.use(route.routers()).use(route.allowedMethods());

app.listen(config.port);
console.log(`The server is started at port ${config.port}`);