const wire1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
const wire2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

const testwire1 = ['R8','U5','L5','D3']
const testwire2 = ['U7','R6','D4','L4']

// let coords = {x: 0, y: 0}
let intersectingCoords = []
let testArr = []
let testArr2 = []

// Function that handles one coord change
const wireCoords = function(distance){
  amount = parseInt(distance.slice(1))
  let coords = {x: 0, y: 0}
  switch (distance[0]) {
    case 'R':
      for (let step = 0; step < (amount); step++){
        coords.x = coords.x + 1
        
        testArr.push(coords)
        console.log(testArr)
      }
      
    case 'L':
      for (let step = 0; step > (-amount ); step--){
        coords.x -= 1 
        
      }
    case 'U':
      for (let step = 0; step < (amount); step++){
        coords.y += 1 
      //  testArr.push(coords)
      }
    case 'D':
      for (let step = 0; step > (-amount); step--){
        coords.y -= 1 
      //  testArr.push(coords)
      }
  }
}

wireCoords('R3')
// Function that handles two arrays of coord changes, stringify to compare changes
const wireCoordsArr = function(wire1) {
  wire1.forEach(move => {
    wireCoords(move)
    
  });
  console.log(testArr)
  // wire2.forEach(move => {
  //   wireCoords(move)
  // });
}
// wireCoordsArr(testwire1)



