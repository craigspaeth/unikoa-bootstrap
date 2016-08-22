/* eslint-env mocha */
const unikoaRouter = require('./')
const sinon = require('sinon')

describe('on the server', () => {
  it('foos', () => {
    console.log(unikoaRouter)
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
