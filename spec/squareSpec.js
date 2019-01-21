var square = new Square(2);

//green
describe('area', () => {
  it('calculates the area of a square', () => {
    expectEquality(square.area(), 4)
  })
})

//red
describe('area', () => {
  it('calculates the area of a square', () => {
    expectEquality(square.area(), 5)
  })
})

//green
describe('area', () => {
  it('calculates the area of a square', () => {
    expectInequality(square.area(), 5)
  })
})

//red
describe('area', () => {
  it('calculates the area of a square', () => {
    expectInequality(square.area(), 4)
  })
})

describe('constructor', () => {
  it('only accepts numbers', () => {
     checkError(function() { new Square("r"); });
  })
})
