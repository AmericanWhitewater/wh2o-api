import { pgClient, DataTypes } from '../config'
import jwt from '../config/jwt'
import { jwtSecretKey } from '../environment'
const User = require('../models/users')(pgClient, DataTypes)

const jwtExpirySeconds = 86400

function comparePasswords (input, record) {
  let mismatch = 0
  for (let i = 0; i < input.length; ++i) {
    mismatch |= (input.charCodeAt(i) ^ record.charCodeAt(i))
  }
  console.log('mismatch :>> ', mismatch)
  return mismatch
}

module.exports = (app) => {
  app.get('/user', (req, res) => {
    User.findOne({
      where: {
        uid: req.query.uid,
      },
    })
      .then((result) => {
        res.send({ user: result }).status(200)
      })
      .catch((err) => {
        console.log(err)
        res.send(err).status(404)
      })
  })

  app.post('/new-user', (req, res) => {
    User.create(req.body)
      .then(() => {
        res.send('Article Created').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.put('/update-user', (req, res) => {
    User.update(req.body, {
      where: {
        uid: req.query.uid,
      },
    })
      .then(() => {
        res.send('User updated').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).status(500)
      })
  })

  app.delete('/delete-user', (req, res) => {
    User.destroy({
      where: {
        uid: req.query.uid,
      },
    })
      .then(() => {
        res.send('User Deleted').status(200)
      })
      .catch((err) => {
        console.log('err: ', err)
        res.send(err).send(500)
      })
  })

  app.post('/user-login', (req, res) => {
    // Get credentials from JSON body
    const { email, password } = req.body

    if (!email || !password) {
      return res.send({ message: 'missing credentials' }).status(400).end()
    }

    const token = jwt.sign({ email }, jwtSecretKey, {
      algorithm: 'HS256',
      expiresIn: jwtExpirySeconds,
    })

    User.findOne({
      where: {
        email,
      },
    })
      .then((result) => {

        if (result) {
          if (comparePasswords(result.dataValues.upass, password)) {
            // return 401 error is username or password doesn't exist, or if password does
            // not match the password in our records
            return res.status(401).send({ message: 'Invalid password' }).end()
          } else {
            res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })

            /**
             * remove some from response.
             */

            delete result.dataValues.epassword
            delete result.dataValues.upass

            res.send({
              user: result.dataValues,
              token
            })

            res.end()
          }
        } else {
          res.status(401).send({ message: 'Invalid email or password provided.' }).end()
        }
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  })

  app.post('/user-refresh', (req, res) => {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).end()
    }

    let payload
    try {
      payload = jwt.verify(token, jwtSecretKey)
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).end()
      }
      return res.status(400).end()
    }

    // We ensure that a new token is not issued until enough time has elapsed
    // In this case, a new token will only be issued if the old token is within
    // 30 seconds of expiry. Otherwise, return a bad request status
    const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
    if (payload.exp - nowUnixSeconds > 30) {
      return res.status(400).end()
    }

    // Now, create a new token for the current user, with a renewed expiration time
    const newToken = jwt.sign({ username: payload.username }, jwtSecretKey, {
      algorithm: 'HS256',
      expiresIn: jwtExpirySeconds,
    })

    // Set the new token as the users `token` cookie
    res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 })
    res.end()
  })

  app.get('/users', async (req, res) => {

    try {
      const result = await User.findAll()

      if (result) {
        res.status(200).send(result)
      }

    } catch (error) {
      console.log('error :>> ', error)
      res.status(500).send(error)
    }

  })

}
