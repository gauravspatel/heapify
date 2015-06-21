var binaryHeap2 = require('../src/binaryHeap2'),
  sinon = require('sinon'),
  chai = require('chai'),
  assert = chai.assert,
  spy = sinon.spy;

describe('binaryHeap2', function () {

    beforeEach(function setup() {
    this.heap = new binaryHeap2();
    });


    it('create an empty heap', function () {
      assert.equal(true, this.heap.isEmpty());
    });

    it('adding a new key to the heap', function () {
        this.heap.add(1);

        assert.equal(1, this.heap.size());
    });

    it('return the number of items in the heap', function () {
        this.heap.add(1);

        assert.equal(1, this.heap.size());
    });

    it('return true if the heap is empty, false otherwise – an optimized form of size when total size is not needed', function () {
        this.heap.add(1);

        assert.equal(false, this.heap.isEmpty());
    });
});