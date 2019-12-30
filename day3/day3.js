const wire1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
const wire2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

const testwire1 = ['R8','U5','L5','D3']
const testwire2 = ['U7','R6','D4','L4']

let coords = {x: 0, y: 0}
let intersectingCoords = []

const wireCoords = function(distance){
  amount = parseInt(distance.slice(1))
  switch (distance[0]) {
    case 'R':
      for (let step = 0; step < (amount); step++){
        coords.x += 1 
        console.log(coords)
      }
      break
    case 'L':
      for (let step = 0; step > (-amount ); step--){
        coords.x -= 1 
        console.log(coords)
      }
      break
    case 'U':
      for (let step = 0; step < (amount); step++){
        coords.y += 1 
        console.log(coords)
      }
      break
    case 'D':
      for (let step = 0; step > (-amount); step--){
        coords.y -= 1 
        console.log(coords)
      }
      break
  }
  // } else if (distance[0] === 'U'){
  //   for (let step = coords.y; step < (amount + initial); step++){
  //     coords.y += 1 
  //     console.log(coords)
  //   }
  // } else if(distance[0] === 'L'){
  //   for (let step = coords.x; step > (-amount); step--){
  //     coords.x -= 1 
  //     console.log(coords)
  //   }
  // } else if (distance[0] === 'D'){
  //   for (let step = coords.y; step > (-amount); step--){
  //     coords.y -= 1 
  //     console.log(coords)
  //   }
  // }
  
}
// wireCoords('D2')

const wireCoordsArr = function(arr) {
  arr.forEach(move => {
    wireCoords(move)
  });
}

wireCoordsArr(testwire2)
// Start (0,0)
// R8: (8, 0), (0, 7)
// U5: (8, 5), (6, 7)
// L5: (3, 5), (6, 3)
// D3: (3, 2), (3, 3)

// R8 (+8, 0), U5 (0, +5), L5 (-5, 0), D3 (0, -3)
// U7 (0, +7), R6 (+6, 0), D4 (0, -4), L5 (-3, 0)


