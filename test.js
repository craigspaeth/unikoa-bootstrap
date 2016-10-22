/* eslint-env mocha */
const unikoaRouter = require('./')
const sinon = require('sinon')

describe('on the server', () => {
  it('adds a head tag if it doesnt exist', () => {
    const ctx = { body: '<html><body></body></html>' }
    return unikoaRouter(ctx, () =>
      ctx.bootstrap(() => Promise.resolve({ foo: 'bar' }))
    )
  })
})

describe('on the client', () => {
  beforeEach(() => {
    global.window = {}
  })

  afterEach(() => {
    delete global.window
  })

  it('loads the data from bootstrap', () => {
    const ctx = {}
    window.__UNIKOA_BOOTSTRAP__ = { foo: 'bar' }
    unikoaRouter(ctx, () => {})
    return ctx.bootstrap().then((data) => data.foo.should.equal('bar'))
  })

  it('loads from bootstrap only once', () => {
    const ctx = {}
    window.__UNIKOA_BOOTSTRAP__ = { foo: 'bar' }
    unikoaRouter(ctx, () => {})
    const callback = sinon.spy()
    ctx.bootstrap(callback)
    ctx.bootstrap(callback)
    callback.called.should.be.ok()
  })
})
