const {
  JWT_SECRET_KEY,
  NODE_ENV = '',
} = process.env

const environment = NODE_ENV.toLowerCase()
const jwtSecretKey = JWT_SECRET_KEY

export { environment, jwtSecretKey }
