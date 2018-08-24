module.exports = async ctx => {
    const title = 'error页面';

    await ctx.render('error', {
        title
    })
}