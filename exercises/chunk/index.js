// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let totalChunk = [];
  let currChunk = [];

  for (num of array) {
    if (currChunk.length < size) {
      currChunk.push(num);
      if (currChunk.length === size) {
        totalChunk.push(currChunk);
        currChunk = [];
      }
    } else if (currChunk.length === size) {
      totalChunk.push(currChunk);
      currChunk = [num];
    }
  }
  return totalChunk;
}

module.exports = chunk;
