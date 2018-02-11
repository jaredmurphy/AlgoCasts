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
