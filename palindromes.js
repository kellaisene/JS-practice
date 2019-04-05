// If a palindrome is the same word reversed that should mean if theres an even number of characters
    // then there should be 2 of each letter/character.
    // If there's an odd number of letters there should still be 2 of each letter but there would be 1
    // extra unique letter leftover
    // If that's true then there is one letter that occurs an odd amount of times
    // We should to store letters and keep count of letter characters
    // If there are more than one letter that has an odd number of instances then that means the string
    // isn't a palindrome
    // so a string with even number of letters can't have a letter with an odd count then we shouldn't 
    // have to check it

    function canRearrangePalindrome(str) {
      var letterCounts = {};
      var letter;
      var palindromeSum = 0;
      for (var i = 0; i < str.length; i++) {
        letter = str[i];
        console.log('letter', letter)
        letterCounts[letter] = letterCounts[letter] || 0;
        console.log('letterCounts', letterCounts[letter])
        letterCounts[letter]++;
        console.log('letterCounts++', letterCounts[letter])
    
      }
      for (var letterCount in letterCounts) {
        console.log('palindromeSum', palindromeSum)
        palindromeSum += letterCounts[letterCount] % 2;
        console.log('palindromeSum2', palindromeSum)
      }
    
      return palindromeSum < 2;
    }
    
    console.log(canRearrangePalindrome('boiob'))