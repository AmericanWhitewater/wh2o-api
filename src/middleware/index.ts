import { Express } from 'express'

const middlewares = [
  require('./authentication'),
  require('./request-parser').parserBase,
  require('./request-parser').parserJSON,
  require('./request-logger')
]

export = (app: Express) => {
  for (const item of middlewares) {
    app.use(item)
  }
}
