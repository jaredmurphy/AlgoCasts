// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ##### Create character count, iterate to find letter with highest number
function maxChar(str) {
  const counts = str.split('').reduce((prev, curr) => {
    prev[curr] ? prev[curr]++ : (prev[curr] = 1);
    return prev;
  }, {});

  let topChar = '';
  let topCount = 0;

  for (let key in counts) {
    if (counts[key] > topCount) {
      topChar = key;
      topCount = counts[key];
    }
  }

  return topChar;
}

module.exports = maxChar;
