const net = require('net')
const { createSocket } = require('dgram')

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer()
    srv.listen(0, function () {
      const port = srv.address().port
      srv.close()
      resolve(port)
    })
  })
}

function freePortUDP() {
  return new Promise((resolve, reject) => {
    const udpServer = createSocket('udp4')
    udpServer.bind(0)

    udpServer.on('listening', () => {
      const port = udpServer.address().port
      udpServer.close()
      resolve(port)
    })
  })
}

module.exports = { freePort, freePortUDP }
