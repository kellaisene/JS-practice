function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  if (birds.includes(geese)){
  
  }
  var filteredArray = birds.filter(bird => !geese.includes(bird))
  return filteredArray;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))