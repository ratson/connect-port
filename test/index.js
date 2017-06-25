import test from 'ava'

import connectPort from '..'

test('resolve to socket', async t => {
  const socket = await connectPort({
    host: 'npmjs.com',
    port: 80,
  })
  t.is(socket.connecting, false)
  t.truthy(socket.on)
})

test('throws TimeoutError', async t => {
  await t.throws(
    connectPort({
      host: 'npmjs.com',
      port: 1,
      timeout: 1,
    })
  )
})

test('throws for not found domain', async t => {
  await t.throws(
    connectPort({
      host: 'unkown.example.com',
      port: 80,
    })
  )
})
