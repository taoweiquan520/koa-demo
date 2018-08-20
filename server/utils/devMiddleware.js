/**
 * @param {obj} compiler
 * @param {obj} opts
 * 作用：封装webpack-dev-middleware，使得koa2支持使用
 */
const webpackDevMiddleware = require('webpack-dev-middleware');

const devMiddleware = (compiler, opts) => {
    const middleware = webpackDevMiddleware(compiler,opts);

    return async (ctx, next) => {
        await middleware(ctx.req, {
            end: (content) => {
                ctx.body = content;
            },
            setHeader: (name, value) => {
                ctx.set(name, value);
            }
        }, next)
    }
}

module.exports = devMiddleware;