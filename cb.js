const path = require('node:path')
const fs = require('node:fs')
const os = require('node:os')

module.exports = function tmpdir (title, cb) {
  if (typeof title === 'function') {
    cb = title
    title = 'tmp'
  }

  var tmp = path.join(os.tmpdir(), title + '-' + Math.random().toString(36).slice(2))
  fs.mkdir(tmp, { recursive: true }, function (err) {
    if (err) return cb(err)
    cb(null, tmp, cleanup)

    function cleanup (cb) {
      fs.rm(tmp, { recursive: true, force: true }, function (err) {
        if (!cb) return
        cb(err)
      })
    }
  })
}
