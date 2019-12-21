const fs = require('fs')

fs.readFile('input-data.txt','utf-8', (err, data) => { 
  if (err) throw err; 
  let inputData = data.split('\n')
  console.log(recursiveFuelCalculator(inputData)); 
}) 

// create a function that takes a mass and returns the fuel amount
const singleFuelCalculator = function(mass) {
  return (Math.floor(mass/3) - 2)
}

//console.log(singleFuelCalculator(130762))

// create a function that takes an array of masses and returns the fuel amount
const fuelCalculator = function(arr) {
  let sum = 0
  for (const fuel of arr) {
    sum += singleFuelCalculator(fuel)
    //console.log(singleFuelCalculator(fuel))
  }
  return sum
}

//console.log(fuelCalculator(inputData))

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

//console.log(singleRecursiveFuelCalculator(1969));

const recursiveFuelCalculator = function(arr) {
  let sum = 0
  for (const fuel of arr) {
    sum += singleRecursiveFuelCalculator(fuel)
  }
  return sum
}