const s3Store = require('./imageStoreFile')

function save (name, base64String) {
  const imageData = base64String.split('data:image/png;base64,')[1]
  return s3Store.save(name, imageData)
}

module.exports = {
  save
}
