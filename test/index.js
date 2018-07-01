import test from 'ava'

import connectPort from '..'

test('resolve to socket', async t => {
  const socket = await connectPort(80, {
    host: 'npmjs.com',
  })
  t.is(socket.connecting, false)
  t.truthy(socket.on)
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
