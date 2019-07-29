const tape = require('tape')
const ptape = require('tape-promise').default
const test = ptape(tape)
const tmp = require('.')

test('p-temporary-directory', async t => {
  const [dir, cleanup] = await tmp()
  t.equal(typeof dir, 'string', 'dir is a string')
  t.equal(typeof cleanup, 'function', 'cleanup is a function')
  const cleanupPromise = cleanup()
  t.true(cleanupPromise instanceof Promise, 'cleanup returns a promise')
})
