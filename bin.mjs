import { freePort, freePortUDP } from './index.js'

const port = await freePort()
console.log('TCP port: ', port)

const portUDP = await freePortUDP()
console.log('UDP port: ', portUDP)
