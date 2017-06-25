'use strict'

const net = require('net')

const pEvent = require('p-event')

async function connectPort({ host, port, timeout = 30000 }) {
  const socket = net.connect({
    host,
    port,
  })
  await pEvent(socket, 'connect', {
    timeout,
  })
  return socket
}

module.exports = connectPort
