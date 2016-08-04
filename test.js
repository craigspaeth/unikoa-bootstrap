/* eslint-env mocha */
const unikoaRouter = require('./')

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

  it('bars', () => {
    console.log(unikoaRouter)
  })
})
