const unikoa = require('unikoa')
const request = require('superagent')
const bootstrap = require('../')

const API_URL = 'http://writer.artsy.net/api'
const router = module.exports = unikoa()

router.use(bootstrap)

router.get('/article/:id', async (ctx, next) => {
  const article = await ctx.bootstrap(() =>
    request.get(`${API_URL}/articles/${ctx.params.id}`)
  )
  ctx.article = article
  next()
})
