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

// 热更新中间件
// const webpack = require('webpack');
// const webpackDevConfig = require('../static/build/webpack.dev.config');
// const devMiddleware = require('./utils/devMiddleware');
// const hotMiddleware = require('./utils/hotMiddleware');
// const compiler = webpack(webpackDevConfig);
// app.use(devMiddleware(compiler));
// app.use(hotMiddleware(compiler));

// session储存配置
sessionMysqlConfig = {
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    host: config.database.HOST
}

// 配置session中间件
// app.use(session({
//     key: 'USER_SID',
//     store: new MySqlStore(sessionMysqlConfig)
// }))

// 后台日志
app.use(convert(logger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

// static静态资源配置
app.use(convert(static(
    path.join(__dirname, '../static')
)));

// 服务端渲染模板中间件配置
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 初始化路由
app.use(route.routes())
    .use(route.allowedMethods());

app.listen(config.port);
console.log(`The server is started at port ${config.port}`);