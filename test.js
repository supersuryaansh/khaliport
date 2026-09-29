const test = require('brittle')
const net = require('net')
const { createSocket } = require('dgram')
const { freePort, freePortUDP } = require('.')

function isValidPort(port) {
  return Number.isInteger(port) && port > 0 && port <= 65535
}

test('freePort returns a valid port', async (t) => {
  const port = await freePort()
  t.ok(isValidPort(port), `got ${port}`)
})

test('freePortUDP returns a valid port', async (t) => {
  const port = await freePortUDP()
  t.ok(isValidPort(port), `got ${port}`)
})

test('TCP port can be bound', async (t) => {
  const port = await freePort()
  const srv = net.createServer()
  await new Promise((resolve, reject) => {
    srv.once('error', reject)
    srv.listen(port, resolve)
  })
  t.is(srv.address().port, port)
  await new Promise((resolve) => srv.close(resolve))
})

test('UDP port can be bound', async (t) => {
  const port = await freePortUDP()
  const socket = createSocket('udp4')
  await new Promise((resolve, reject) => {
    socket.once('error', reject)
    socket.once('listening', resolve)
    socket.bind(port)
  })
  t.is(socket.address().port, port)
  await new Promise((resolve) => socket.close(resolve))
})

test('concurrent calls resolve', async (t) => {
  const ports = await Promise.all([
    ...Array.from({ length: 5 }, freePort),
    ...Array.from({ length: 5 }, freePortUDP)
  ])
  t.ok(ports.every(isValidPort))
})
