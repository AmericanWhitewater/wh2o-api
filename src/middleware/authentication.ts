import { jwtSecretKey } from '../environment'
import jwt from '../config/jwt'

export = (req, res, next) => {
  const protectedMethods = ['POST', 'DELETE', 'PUT', 'PATCH']
  const whitelistedRoutes = ['/user-login', '/user-register', '/user-forgot']
  const token = req.headers['x-access-token'] || req.headers.authorization

  if (
    protectedMethods.indexOf(req.method) > -1 &&
    !!whitelistedRoutes.indexOf(req.url)
  ) {

    if (!token) return res.status(401).send('Access denied. No token provided.')

    jwt.verify(token.split(' ')[1], jwtSecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }
      req.user = user
      next()
    })
  } else {
    next()
  }
}
