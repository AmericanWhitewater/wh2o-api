import { Express } from 'express'

const middlewares = [
  require('./request-parser'),
  require('./request-logger')
]

export = (app: Express) => {
  for (const item of middlewares) {
    app.use(item)
  }
}
