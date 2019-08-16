const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const os = require('os')

module.exports = function tmpdir (title, cb) {
  if (typeof title === 'function') {
    cb = title
    title = 'tmp'
  }

  var tmp = path.join(os.tmpdir(), title + '-' + Math.random().toString(36).slice(2))
  mkdirp(tmp, function (err) {
    if (err) return cb(err)
    cb(null, tmp, cleanup)

    function cleanup (cb) {
      rimraf(tmp, function (err) {
        if (!cb) return
        cb(err)
      })
    }
  })
}
