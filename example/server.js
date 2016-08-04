const Koa = require('koa')
const router = require('./router')

const app = new Koa()

app.use(require('koa-static')(__dirname))
app.use(router.routes())

router.get('/article/:id', async (ctx, next) => {
  ctx.body = `
    <html>
      <head></head>
      <body>
      ${ctx.article.title}
      <script src='/bundle.js'></script>
      </body>
    </html>
  `
})

app.listen(3000)
console.log('Listening')
