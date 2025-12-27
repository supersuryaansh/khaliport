# Khaliport

Get an unused TCP or UDP port on your system, works on both Nodejs and Bare runtime.

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

- `freePort`
- `freePortUDP`
