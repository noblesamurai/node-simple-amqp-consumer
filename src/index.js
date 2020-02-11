const AMQP = require('simple-amqplib');
const { callbackify } = require('util');

/**
 * @param {object} amqpConfig Config passed to [simple-amqplib](https://github.com/noblesamurai/node-simple-amqplib).
 * @param {function} process async function to process messages
 * @param opts.init {Array<Promise>|Promise} These are waited for before
 * consuming. Use for e.g. DB connection to come up.
 * @return The simple-amqplib instance (so you can e.g. .close() it).
 */
async function main (amqpConfig, process, opts = {}) {
  const amqp = new AMQP(amqpConfig);
  let { init = [] } = opts;
  if (!Array.isArray(init)) init = [init];

  // Wait for setup/init promises to resolve
  await Promise.all([...init, amqp.connect()]);
  amqp.consume(callbackify(process));
  return amqp;
}

module.exports = main;
