# unikoa-bootstrap

**NOTE: This is a WIP and not production ready yet**

[Unikoa](https://github.com/craigspaeth/unikoa) middleware that provides a helper to bootstrap data from server to client.

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


## Why

Unikoa Bootstrap provides a helper `ctx.bootstrap(() => Promise)` that makes it easy to load data on the server, and then [bootstrap](http://backbonejs.org/#FAQ-bootstrap) that data on the browser-side without fetching it twice. This is a common pattern in universal apps that share routing code because you often want to make some external HTTP API calls to fetch data for a page, render the first initial load on the server, then re-running that routing code on the client causes the fetching code to run again. This helps solve that pattern [without all of the manual boilerplate](http://stackoverflow.com/questions/36230940/universal-react-redux-react-router-how-to-avoid-re-fetching-route-data-on) one would have to come up with otherwise.

## Contributing

Please fork the project and submit a pull request with tests. Install node modules `npm install` and run tests with `npm test`.

## License

MIT
