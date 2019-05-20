// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.

// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

// Example

// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

// For s = "abacabaabacaba", the output should be
// firstNotRepeatingCharacter(s) = '_'.

// There are no characters in this string that do not repeat.

function firstNotRepeatingCharacter(s) {
  for (var i = 0; i < s.length; i++){
      var c = s.charAt(i);
      if(s.indexOf(c) == i && s.indexOf(c, i + 1) == -1){
          return c;
      }
  }
  return '_';
}

// OTHER ATTEMPTS //
function firstNotRepeatingCharacter(s) {
  //Can we split the characters and turn it into an array?
  var chars = s.split('')
  console.log('CHARS', chars)
  //We want to loop through the string and check each letter
  for(var i = 0; i <= s.length; i++){
      if(chars.filter((j) => {
        console.log('j', j)
          return j == s.charAt(i);
      }).length == 1) return s.charAt(i);
      console.log('s.charAt after', s.charAt(i))
  }
  return '_'
}
console.log('firstNotRepeatingCharacter', firstNotRepeatingCharacter('abacabad'))