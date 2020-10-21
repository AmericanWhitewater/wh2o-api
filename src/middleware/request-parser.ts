import bodyParser from 'body-parser'

const parserBase = bodyParser.urlencoded({ extended: true })
const parserJSON = bodyParser.json()

export = { parserBase, parserJSON }
