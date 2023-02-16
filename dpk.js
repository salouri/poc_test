const crypto = require('crypto');

// This function is used to generate a deterministic partition key for a given event.
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0'; // This is the default partition key for events with no partition key.
  const MAX_PARTITION_KEY_LENGTH = 256; // This is the maximum length of a partition key.
  let partKeyCandidate; // This is the candidate partition key.
  try {
    if (event) {
      // If the event has a partition key, we'll use that.
      if (event.partitionKey) {
        partKeyCandidate = event.partitionKey;
      } else {
        // If the event has no partition key, we'll use a hash of the event data.
        const data = JSON.stringify(event);
        partKeyCandidate = crypto.createHash('sha3-512').update(data).digest('hex');
      }
    }
    if (partKeyCandidate) {
      // If the partition key candidate is not a string, we'll stringify it.
      if (typeof partKeyCandidate !== 'string') {
        partKeyCandidate = JSON.stringify(partKeyCandidate);
      }
    } else {
      // If the partition key candidate is still undefined, we'll use the trivial partition key.
      partKeyCandidate = TRIVIAL_PARTITION_KEY;
    }
    if (partKeyCandidate.length > MAX_PARTITION_KEY_LENGTH) {
      // If the partition key candidate is too long, we'll hash it.
      partKeyCandidate = crypto
        .createHash('sha3-512')
        .update(partKeyCandidate)
        .digest('hex');
    }
  } catch (error) {
    console.error(error);
    partKeyCandidate = TRIVIAL_PARTITION_KEY;
  }
  return partKeyCandidate;
};
