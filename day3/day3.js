const wire1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
const wire2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

const testwire1 = ['R8','U5','L5','D3']
const testwire2 = ['U7','R6','D4','L4']

let coords = {x: 0, y: 0}
// Keep track of matching coords
let intersectingCoords = []
// increment by 1
// my function moves by 1 and by how much

const wireCoords = function(distance){
  if (distance[0] === 'R'){
    amount = distance.slice(1)
    for(let step = coords.x; step < parseInt(amount)+1; step++){
      console.log('Step:', step)
    }
    coords.x = amount
    return coords
  }
}
console.log(wireCoords('R8'))
// Start (0,0)
// R8: (8, 0), (0, 7)
// U5: (8, 5), (6, 7)
// L5: (3, 5), (6, 3)
// D3: (3, 2), (3, 3)

// R8 (+8, 0), U5 (0, +5), L5 (-5, 0), D3 (0, -3)
// U7 (0, +7), R6 (+6, 0), D4 (0, -4), L5 (-3, 0)


