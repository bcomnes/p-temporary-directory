# p-temporary-directory
[![latest version](https://img.shields.io/npm/v/p-temporary-directory.svg)](https://www.npmjs.com/package/p-temporary-directory)
[![Actions Status](https://github.com/bcomnes/p-temporary-directory/workflows/tests/badge.svg)](https://github.com/bcomnes/p-temporary-directory/actions)
[![Coverage Status](https://coveralls.io/repos/github/bcomnes/p-temporary-directory/badge.svg?branch=master)](https://coveralls.io/github/bcomnes/p-temporary-directory?branch=master)
[![downloads](https://img.shields.io/npm/dm/p-temporary-directory.svg)](https://npmtrends.com/p-temporary-directory)

The same as [temporary-directory](https://github.com/maxogden/temporary-directory) but with promises.

```
npm install p-temporary-directory
```

## Usage

``` js
const tmp = require('p-temporary-directory')
const tmpCb = require('p-temporary-directory/cb') // same as temporary-directory

async function usuallyATest() {
  const [dir, cleanup] = await tmp()
  // use dir
  //...

  await cleanup()
}
```

## License

MIT
