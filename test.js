const tape = require('tape')
const ptape = require('tape-promise').default
const test = ptape(tape)
const fs = require('fs')
const pTmp = require('.')
const tmp = require('./cb')

tape('creates and cleans up tmpdir', function (t) {
  tmp(function (err, tmpdir, cleanup) {
    t.notOk(err, 'no error')
    t.ok(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      t.notOk(err, 'no error')
      t.notOk(fs.existsSync(tmpdir), 'tmpdir got removed')
      t.end()
    })
  })
})

tape('creates and cleans up tmpdir w/ custom prefix', function (t) {
  tmp('cats', function (err, tmpdir, cleanup) {
    t.notOk(err, 'no error')
    t.ok(tmpdir.indexOf('cats-') > -1, 'has cats-')
    t.ok(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      t.notOk(err, 'no error')
      t.notOk(fs.existsSync(tmpdir), 'tmpdir got removed')
      t.end()
    })
  })
})

test('p-temporary-directory', async t => {
  const [dir, cleanup] = await pTmp()
  t.equal(typeof dir, 'string', 'dir is a string')
  t.equal(typeof cleanup, 'function', 'cleanup is a function')
  const cleanupPromise = cleanup()
  t.true(cleanupPromise instanceof Promise, 'cleanup returns a promise')
})
