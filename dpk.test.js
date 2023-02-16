const { deterministicPartitionKey } = require('./dpk');

// This test suite is for the deterministicPartitionKey function.
describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it("Returns the literal '0' when given an empty string", () => {
    const trivialKey = deterministicPartitionKey('');
    expect(trivialKey).toBe('0');
  });

  it('Returns a specific literal when given an empty object', () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(
      'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
    );
  });

  it("Returns the literal '12345' when given a an event with such partition key", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: '12345' });
    expect(trivialKey).toBe('12345');
  });
});
