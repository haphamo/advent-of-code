const puzzleInput = 109165-576723

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)

let result = []
let allPossibilities = []
const numberInArray = function(arr) {
  const lengthOfCode = 6
  for (let i = 0; i < lengthOfCode; i++){
    let index = Math.floor(Math.random() * arr.length)
    result.push(arr[index])
    arr.splice(index, 1)
    console.log('--------------')
    console.log('original',arr)
    console.log('result',result.sort().join(""))
  }
  return result
}

console.log(numberInArray([1,0,9,1,6,5,5,7,6,7,2,3])) 

/*
156679
*/