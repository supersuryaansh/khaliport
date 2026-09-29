#!/usr/bin/env node

import { freePort, freePortUDP } from '../index.js'

const ports = {
  tcp: await freePort(),
  udp: await freePortUDP()
}

console.log(JSON.stringify(ports))
