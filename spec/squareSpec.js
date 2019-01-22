var square = new Square(2);

//green
describe('area', () => {
  it('calculates the area of a square', () => {
    expectEquality(square.area(), 4);
  })
})

// describe('area', () => {
//   it('calculates the area of a square', () => {
//     expectInequality(square.area(), 5);
//   })
// })

describe('area', () => {
  it('calculates the area of a square', () => {
    expect(square.area()).toEqual(4);
  })
})


describe('constructor', () => {
  it('only accepts numbers', () => {
     checkError(function() { new Square("r"); });
  })
})

describe('constructor', () => {
  it('only accepts positive numbers', () => {
     checkError(function() { new Square(-5); });
  })
})
