# unikoa-bootstrap

**NOTE: This is a WIP and not production ready yet**

Unikoa middleware that provides a helper to bootstrap data from server -> client

## Example

````javascript
const unikoa = require('unikoa')
const request = require('superagent')
const bootstrap = require('unikoad-bootstrap')

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
````

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `npm test`.

## License

MIT
