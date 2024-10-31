const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [] for a single element array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for a two element array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for an odd-length array", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); // => [2]
  });

  it("returns [3] for an odd-length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
  });

  it("returns [2, 3] for an even-length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  });

  it("returns [3, 4] for an even-length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
  });
});
