# Khaliport

Get a free TCP or UDP port on your system, works on both Nodejs and Bare runtime.

## Install

```sh
npm i khaliport
```

## Usage

```js
import { freePort } from 'khaliport'
const port = await freePort()
console.log(port)
```

## CLI

### Install

```sh
npm i khaliport -g
```

### Usage

```sh
khaliport
```

## API

#### `const port = await freePort()`

Resolves with a free TCP port. The port is found by listening on port `0` (all interfaces, dual-stack where supported) and closing the server once the OS has assigned a port. Rejects if the server fails to listen.

#### `const port = await freePortUDP()`

Resolves with a free UDP port. Same approach as `freePort`, but binds an IPv4 (`udp4`) socket. Rejects if the socket fails to bind.

> [!NOTE]
> The port is free at the moment it is returned, but nothing reserves it. Another process may take it before you bind to it, so treat the result as a best-effort hint and handle `EADDRINUSE` if that matters for your use case.

## LICENSE

MIT
