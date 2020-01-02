const puzzleInput = 109165-576723

// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679)

//create a function that returns a number in a given array
const numberInArray = function(arr) {
  //a random number which is the index from 0 - arr.length
  const index = Math.floor(Math.random() * arr.length)
  console.log(index)
  return arr[index]
}

console.log(numberInArray([1,2,3,4,5,6]))