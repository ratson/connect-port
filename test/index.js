import test from 'ava'
import http from 'http'
import getPort from 'get-port'

import connectPort from '..'

test('resolve to socket', async t => {
  const socket = await connectPort(80, {
    host: 'npmjs.com',
  })
  t.is(socket.connecting, false)
  t.truthy(socket.on)
})

test('connect default to localhost', async t => {
  const port = await getPort()
  const server = http.createServer((_req, res) => {
    res.end()
  })
  await new Promise(resolve => {
    server.listen(port, resolve)
  })
  const socket = await connectPort(port)
  t.is(socket.connecting, false)
  server.close()
})

test('throws TimeoutError', async t => {
  await t.throws(
    connectPort(1, {
      host: 'npmjs.com',
      timeout: 1,
    }),
  )
})

test('throws for not found domain', async t => {
  await t.throws(
    connectPort(80, {
      host: 'unkown.example.com',
    }),
  )
})
