/**
 *  Given a string (ex: "AKTIFY", "VIVINT") and an onscreen keyboard, produce a
 *  valid series of inputs ('enter', 'up', 'down', 'left', and 'right') that produce the string.
 *
 *  Example onscreen keyboard:
 *
 *  |---|---|---|---|---|---|
 *  | A | B | C | D | E | F |
 *  |---|---|---|---|---|---|
 *  | G | H | I | J | K | L |
 *  |---|---|---|---|---|---|
 *  | M | N | O | P | Q | R |
 *  |---|---|---|---|---|---|
 *  | S | T | U | V | W | X |
 *  |---|---|---|---|---|---|
 *  |   |   | Y | Z |   |   |
 *  |---|---|---|---|---|---|
 *
 *  Assumptions:
 *
 *  - The cursor always starts on "A"
 *  - There is no wrapping, meaning pushing 'right' when the cursor is on L DOES NOT move the
 *      cursor to G
 *  - You can navigate to the empty squares, but you cannot push 'enter' on them
 *
 *  Requirements:
 *
 *  - The result is an array/list of strings
 *  - The result only has to be a valid series of inputs (it DOES NOT need to be optimal)
 *
 *  Examples (using the above onscreen keyboard):
 *
 *  "A" -> [ 'enter' ]
 *  "AK" -> [ 'enter', 'right', 'right', 'right', 'down, 'enter' ]
 *  "AKT" -> [ 'enter', 'right', 'right', 'right', 'down, 'enter', 'left', 'left', 'left', 'down', 'down', 'enter' ]
 *  "S" -> [ 'down', 'down', 'down', 'enter' ]
 */

 const characterCoordinates = (str) => {
    const letterCoordinates = [
    {id: "A", x:0, y:0},
    {id: "B", x:1, y:0},
    {id: "C", x:2, y:0},
    {id: "D", x:3, y:0},
    {id: "E", x:4, y:0},
    {id: "F", x:5, y:0},
    {id: "G", x:0, y:1},
    {id: "H", x:1, y:1},
    {id: "I", x:2, y:1},
    {id: "J", x:3, y:1},
    {id: "K", x:4, y:1},
    {id: "L", x:5, y:1},
    {id: "M", x:0, y:2},
    {id: "N", x:1, y:2},
    {id: "O", x:2, y:2},
    {id: "P", x:3, y:2},
    {id: "Q", x:4, y:2},
    {id: "R", x:5, y:2},
    {id: "S", x:0, y:3},
    {id: "T", x:1, y:3},
    {id: "U", x:2, y:3},
    {id: "V", x:3, y:3},
    {id: "W", x:4, y:3},
    {id: "X", x:5, y:3},
    {id: "Y", x:2, y:4},
    {id: "Z", x:3, y:4},
  ]
    let finalDirections = []
    let lastCoordinates
    for (let i in str) {
      console.log('LAST COORDINATES', lastCoordinates)
      let directions = []
      console.log('LOOP', str[i])
      // Match current letter to letter coordinates
      const res = letterCoordinates.filter(o => (o.id.includes(str[i])))
  
      console.log('HEY', res[0])
      const x = "right, "
      const y = "down, "
      const negX = "left, "
      const negY = "up, "
      // Take res and use the x y coordinates to generate the string directions to push to the directions array
      console.log('LAST', lastCoordinates === undefined)
      if (lastCoordinates == undefined) {
        finalDirections.push(x.repeat(res[0].x) + y.repeat(res[0].y) + "enter, ")
      console.log('IF LAST', finalDirections)
      } else {
        // compare last coordinates to current to determine directions from there
        const xDiff = res[0].x - lastCoordinates.x
        const yDiff = res[0].y - lastCoordinates.y
        const xIsNeg = Math.sign(xDiff)
        const yIsNeg = Math.sign(yDiff)
        console.log('XDIFF', xDiff)
        console.log('YDIFF', yDiff)
        console.log('XISNEG', xIsNeg)
        console.log('YISNEG', yIsNeg)
        finalDirections.push((xIsNeg == -1 ? negX.repeat(Math.abs(xDiff)) : x.repeat(Math.abs(xDiff))) + (yIsNeg == -1 ? negY.repeat(Math.abs(yDiff)) : y.repeat(Math.abs(yDiff))) + "enter, ")
        console.log('ELSE FINAL', finalDirections)
      }
    lastCoordinates = res[0]
    }
    console.log('FINAL DIRECTIONS', finalDirections)
    return finalDirections
  }
  
  console.log('RESULTS', characterCoordinates("KELLER"))