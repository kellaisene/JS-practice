// Basic reduction finding sum of array
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
console.log('sum', sum) // 118.11


// Reduction to find average
const eurosAverage = [29.76, 41.85, 46.5];
const average = eurosAverage.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log('Average', average) // 39.37