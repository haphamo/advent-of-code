// --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// The Elves quickly load you into a spacecraft and prepare to launch.

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

const inputData = [
130762,
108691,
131618,
138163,
59967,
130453,
117515,
115776,
134083,
86966,
128075,
55569,
112843,
97878,
92330,
70917,
143903,
81171,
148506,
141379,
131161,
88719,
69654,
82141,
55265,
75623,
97408,
105269,
147378,
126054,
133962,
60304,
130503,
138350,
93164,
69661,
69271,
100054,
138295,
142865,
64142,
123466,
80101,
149696,
102510,
129988,
87742,
106785,
133039,
59192,
86544,
124950,
64242,
80128,
109287,
129634,
140335,
118220,
106819,
97296,
111003,
103222,
54192,
103548,
63861,
140571,
50476,
100570,
114065,
110279,
64720,
91941,
62312,
80834,
132969,
51973,
115887,
68662,
138266,
107234,
75795,
81409,
78610,
112587,
92384,
111804,
138861,
79393,
81285,
131307,
68815,
54976,
127529,
103359,
138537,
79663,
128097,
56085,
96504,
119501,
]

// create a function that takes a mass and returns the fuel amount

const singleFuelCalculator = function(mass) {
  return (Math.floor(mass/3) - 2)
}

//console.log(singleFuelCalculator(130762))

// create a function that takes an array of masses and returns the fuel amount

const fuelCalculator = function(arr) {
  let sum = 0;
  for (const fuel of arr) {
    sum += singleFuelCalculator(fuel)
    //console.log(singleFuelCalculator(fuel))
  }
  return sum
}

//console.log(fuelCalculator(inputData))

// Part Two

// recusion ?

const fuelCalculator2 = function(mass){
  let sum = 0;
  //base case
  if (singleFuelCalculator(mass) < 0) {
    return sum
  } else {
    sum += singleFuelCalculator(mass)
    return sum + fuelCalculator2(singleFuelCalculator(mass))
  }

}

console.log(fuelCalculator2(1969));