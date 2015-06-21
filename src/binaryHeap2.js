"use strict";

function BinaryHeap2() {
    this.__heap = [];
};

BinaryHeap2.prototype.add = function(int) {
    return this.__heap.push(int);
};

BinaryHeap2.prototype.size = function() {
    return this.__heap.length;
};

BinaryHeap2.prototype.isEmpty = function() {
    return this.size() === 0;
};

module.exports = BinaryHeap2;