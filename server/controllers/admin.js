module.exports = async ctx => {
    const title = 'admin页面';
    
    await ctx.render('admin', {
        title
    })
}