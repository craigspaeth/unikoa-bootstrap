const router = require('./router')

router.get('/article/:id', async (ctx) => {
  window.alert(ctx.article.title)
})

router.routes()
