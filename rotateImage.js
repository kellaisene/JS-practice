// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

function rotateImage(a) {
  // Looks like we can take the index of each number in each array and assign them to a new array 
  // Like all index 0 will go in array and all index 1 will go in array1 and all index 2 will go in array2 
  var origMatrix = a.slice();
  for(var i = 0; i < a.length; i++){
      var row = a[i].map(function(x, j) {
          var k = (a.length - 1) - j;
          return origMatrix[k][i];
      });
      a[i] = row;
  }
  return a
}