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

connectPort(80, {
  host: 'npmjs.com',
}).then(socket => {
  console.log(socket.connecting)
})
// false
```

## Related

- [port-ready](https://github.com/ratson/port-ready) - Promise to wait until a port is ready to accept connection.
