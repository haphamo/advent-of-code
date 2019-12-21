const fs = require('fs')

fs.readFile('input-data.txt','utf-8', (err, data) => { 
  if (err) throw err; 
  let inputData = data.split('\n')
  console.log(fuelCalculator(inputData)); 
  console.log(recursiveFuelCalculator(inputData)); 
}) 

// create a function that takes a mass and returns the fuel amount
const singleFuelCalculator = function(mass) {
  return (Math.floor(mass/3) - 2)
}

// create a function that takes an array of masses and returns the fuel amount
const fuelCalculator = function(arr) {
  let sum = 0
  for (const fuel of arr) {
    sum += singleFuelCalculator(fuel)
  }
  return sum
}

// Part Two

const singleRecursiveFuelCalculator = function(mass){
  let sum = 0
  //base case
  if (singleFuelCalculator(mass) < 0) {
    return sum
  } else {
    sum += singleFuelCalculator(mass)
    return sum + singleRecursiveFuelCalculator(singleFuelCalculator(mass))
  }
}

const recursiveFuelCalculator = function(arr) {
  let sum = 0
  for (const fuel of arr) {
    sum += singleRecursiveFuelCalculator(fuel)
  }
  return sum
}