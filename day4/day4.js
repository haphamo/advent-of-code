const puzzleInput = 109165-576723

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)

// create a function that returns a number in a given array
// return 6 random values in array instead of 1

let result = []
const numberInArray = function(arr) {
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * arr.length)
    result.push(arr[index])
    // console.log(result)
  }
  // console.log(index)
  return result
}

// console.log(numberInArray([1,2,3,4,5,6]))
console.log(numberInArray([6,9,9,0,2,3,1]))