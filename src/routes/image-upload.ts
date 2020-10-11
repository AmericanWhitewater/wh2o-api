const formData = require('express-form-data')
const os = require('os')

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
}

module.exports = (app) => {
  // parse data with connect-multiparty.
  app.use(formData.parse(options))
  // delete from the request all empty files (size == 0)
  app.use(formData.format())
  // change the file objects to fs.ReadStream
  app.use(formData.stream())
  // union the body and the files
  app.use(formData.union())

  app.post('/image-upload', (req, res) => {
    console.log(req.files)
    console.log(req.body.name)

    res.send('upload')
  })
}
