const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); 
    assert.strictEqual(words.length, 3);
    assert.strictEqual(words[0], "Yo Yo");
    assert.strictEqual(words[1], "Lighthouse");
    assert.strictEqual(words[2], "Labs");
  });

  it("returns an empty array when given an array with one element", () => {
    const result = tail(["Hello"]);
    assert.deepEqual(result, []);
  });

  it("returns an empty array when given an empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});