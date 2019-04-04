/*
  Title:
    Filter out the geese
  Description:
    Write a function, gooseFilter/goose_filter/GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
    The geese are any strings in the following array, which is pre-populated in your solution:
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    For example, if this array were passed as an argument:
    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    Your function would return the following array:
    ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.
    Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
  Kata Link:
    https://www.codewars.com/kata/filter-out-the-geese
  Discuss Link:
    https://www.codewars.com/kata/filter-out-the-geese/discuss
  Solutions Link:
    https://www.codewars.com/kata/filter-out-the-geese/solutions
*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  if (birds.includes(geese)){
  
  }
  var filteredArray = birds.filter(bird => !geese.includes(bird))
  return filteredArray;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

