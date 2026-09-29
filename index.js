const net = require('net')
const { createSocket } = require('dgram')

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer()
    srv.once('error', reject)
    srv.listen(0, function () {
      const port = srv.address().port
      srv.close(() => resolve(port))
    })
  })
}

function freePortUDP() {
  return new Promise((resolve, reject) => {
    const udpServer = createSocket('udp4')
    udpServer.once('error', reject)

    udpServer.on('listening', () => {
      const port = udpServer.address().port
      udpServer.close(() => resolve(port))
    })

    udpServer.bind(0)
  })
}

module.exports = { freePort, freePortUDP }
