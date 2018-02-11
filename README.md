# AlgoCasts

# Reverse String
```
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
```

##### Array.reverse
```
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
```

##### For loop - descending counter
```
function reverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

##### ES6 for loop syntax
```
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

##### Array.reduce
```
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
```
# Palindrome
```
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
```

##### Array.every
```
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```

##### Reverse string then compare directly to original string
```
function palindrome(str) {
  const reversed = str
    .split('')
    .reverse('')
    .join('');

  return str === reversed;
}
````

##### Reverse string then loop through to compare each character
```
function palindrome(str) {
  const reversed = str
    .split('')
    .reverse('')
    .join('');

  for (let i = 0; i < str.length; i++) {
    if (reversed[i] != str[i]) {
      return false;
    }
  }
  return true;
}
```

module.exports = palindrome;
