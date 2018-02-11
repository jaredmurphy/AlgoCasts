// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Turn number to string, reverse, place '-' if negative
// function reverseInt(n) {
//   let number = n
//     .toString()
//     .replace('-', '')
//     .split('')
//     .reverse()
//     .join('');
//
//   if (n < 0) {
//     number = '-' + number;
//   }
//
//   return parseInt(number);
// }

// Use Math.sign to handle neg numbers
function reverseInt(n) {
  let number = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(number) * Math.sign(n);
}

module.exports = reverseInt;
