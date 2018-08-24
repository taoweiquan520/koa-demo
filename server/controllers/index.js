module.exports = async ctx => {
    const title = 'home页面';

    await ctx.render('index', {
        title
    })
}