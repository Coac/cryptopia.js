# cryptopia.js

[Cryptopia](https://www.cryptopia.co.nz/Exchange/) exchange api wrapper

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation

    npm install cryptopia.js

## Usage

```js
const Cryptopia = require('cryptopia.js')
const cryptopia = new Cryptopia('YOUR_KEY', 'YOUR_SECRET');

(async function () {
  const orderBook = await cryptopia.GetMarketOrders('DOT_BTC', 50)
  console.log(orderBook)
}())
```

See  `example.js` for the implemented methods

## Cryptopia Api docs
- [Public Api](https://www.cryptopia.co.nz/Forum/Thread/255)
- [Private Api](https://www.cryptopia.co.nz/Forum/Thread/256)
