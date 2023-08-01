const test = require('node:test')
const assert = require('node:assert')
const fs = require('node:fs')
const pTmp = require('.')
const tmp = require('./cb')

test('creates and cleans up tmpdir', function (t, done) {
  tmp(function (err, tmpdir, cleanup) {
    assert.ifError(err)
    assert(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      assert.ifError(err)
      assert(!fs.existsSync(tmpdir), 'tmpdir got removed')
      done()
    })
  })
})

test('creates and cleans up tmpdir w/ custom prefix', function (t, done) {
  tmp('cats', function (err, tmpdir, cleanup) {
    assert.ifError(err)
    assert.ok(tmpdir.indexOf('cats-') > -1, 'has cats-')
    assert.ok(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      assert.ifError(err)
      assert.ok(!fs.existsSync(tmpdir), 'tmpdir got removed')
      done()
    })
  })
})

test('p-temporary-directory', async t => {
  const [dir, cleanup] = await pTmp()
  assert.equal(typeof dir, 'string', 'dir is a string')
  assert.equal(typeof cleanup, 'function', 'cleanup is a function')
  const cleanupPromise = cleanup()
  assert(cleanupPromise instanceof Promise, 'cleanup returns a promise')
  await cleanupPromise
})
