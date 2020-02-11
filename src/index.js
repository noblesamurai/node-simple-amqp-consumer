const AMQP = require('simple-amqplib');
const { callbackify } = require('util');

async function main (amqpConfig, process, opts = {}) {
  const amqp = new AMQP(amqpConfig);
  const { init = [] } = opts;

  // Wait for setup/init promises to resolve
  await Promise.all([...init, amqp.connect()]);
  amqp.consume(callbackify(process));
}

module.exports = main;
