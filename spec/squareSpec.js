var square = new Square(2);

describe('area', () => {
  it('calculates the area of a square', () => {
    expect(square.area()).toBe(4);
  })
})
