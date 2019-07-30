# p-temporary-directory

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
