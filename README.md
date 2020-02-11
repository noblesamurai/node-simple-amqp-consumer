# simple-amqp-consumer

> Consume messages using simple-amqp.

## Purpose
Boilerplate to consumer messages using `simple-amqplib`.

## Usage

```js
simpleAMQPConsumer(amqpConfig, processMessage, { init: db.migrate.latest() })
  .then(amqp => {
    process.once('SIGTERM', () => {
      amqp.close();
      db.close();
    });
    console.log(`Consuming on ${amqpConfig.queue.name}`);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
```

## API

<a name="main"></a>

## main(amqpConfig, process) ⇒
**Kind**: global function
**Returns**: The simple-amqplib instance (so you can e.g. .close() it).

| Param | Type | Description |
| --- | --- | --- |
| amqpConfig | <code>object</code> | Config passed to [simple-amqplib](https://github.com/noblesamurai/node-simple-amqplib). |
| process | <code>function</code> | async function to process messages |
| opts.init | <code>Array.&lt;Promise&gt;</code> \| <code>Promise</code> | These are waited for before consuming. Use for e.g. DB connection to come up. |


Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install simple-amqp-consumer
```
## License

The BSD License

Copyright (c) 2020, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

