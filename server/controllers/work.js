module.exports = async ctx => {
    const title = 'work页面';

    await ctx.render('work', {
        title
    })
}