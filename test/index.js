const sinon = require('sinon');
const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const consumeStub = sinon.stub().resolves();
const amqpStub = function () {
  return {
    connect: sinon.stub().resolves(),
    consume: consumeStub
  };
};
const consumer = proxyquire('..', {
  'simple-amqplib': amqpStub
});
describe('simple-amqplib-consumer', function () {
  beforeEach(function () {
    consumeStub.reset();
  });
  it('works', async function () {
    await consumer({ queue: {} }, async => {});
    expect(consumeStub.callCount).to.be.greaterThan(0);
    expect(typeof consumeStub.getCall(0).args[0]).to.equal('function');
  });
  it('works with array init', async function () {
    await consumer({ queue: {} }, async => {}, { init: [Promise.resolve()] });
    expect(consumeStub.callCount).to.be.greaterThan(0);
    expect(typeof consumeStub.getCall(0).args[0]).to.equal('function');
  });
  it('works with non array init', async function () {
    await consumer({ queue: {} }, async => {}, { init: Promise.resolve() });
    expect(consumeStub.callCount).to.be.greaterThan(0);
    expect(typeof consumeStub.getCall(0).args[0]).to.equal('function');
  });
});
