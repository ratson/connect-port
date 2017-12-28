# connect-port

Resolve a promise when successfully connected to remote port.

## Installation

```
npm install connect-port --save
```

## Usage

<!-- eslint-disable strict,no-console -->

```js
const connectPort = require('connect-port')

connectPort({
  host: 'npmjs.com',
  port: 80,
}).then(socket => {
  console.log(socket.connecting)
})
// false
```
