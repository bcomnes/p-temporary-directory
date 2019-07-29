const tmpCb = require('temporary-directory')

module.exports = function tmp () {
  return new Promise((resolve, reject) => {
    tmpCb((err, dir, cleanup) => {
      if (err) return reject(err)
      return resolve([dir, () => new Promise((resolve, reject) => {
        cleanup(err => {
          if (err) return reject(err)
          resolve()
        })
      })])
    })
  })
}
