const {
  JWT_SECRET_KEY,
  NODE_ENV = '',
} = process.env

const environment = NODE_ENV.toLowerCase()
const jwt_secret_key = JWT_SECRET_KEY

export { environment, jwt_secret_key }
