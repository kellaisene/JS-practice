const str = "Sam Harris";
function getInitials(str) {
  const splitWords = str.split(' ');
  let initials = '';
  for(var i = 0; i < splitWords.length; i++) {
    console.log('LOOP', splitWords)
    if(splitWords[i].length > 0 && splitWords[i] !== ''){
      console.log('SPLITWORDS', splitWords[i])
      initials += splitWords[i][0] + '.'
      console.log('INIT', initials) // S.H.
    }
  }
  return initials;
}
// console.log('INITIALS', getInitials(str))

function abbrevName(str){
  var splitArray = str.split(' ');
  return (splitArray[0][0] + '.' + splitArray[1][0])
}

console.log('INITIALS', abbrevName(str)) // S.H