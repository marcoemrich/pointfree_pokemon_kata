// const animals = [
//   {animal: 'elephant', weight: 2000, name: 'Betty'},
//   {animal: 'elephant', weight: 1300, name: 'Brian'},
//   {animal: 'elephant', weight: 400, name: 'Dumbo'},
//   {animal: 'elephant', weight: 800, name: 'Omandand'},
//   {animal: 'pokemon', weight: 120, name: 'Greninja'},
//   {animal: 'elephant', weight: 1400, name: 'Frank'},
//   {animal: 'pokemon', weight: 50, name: 'Minun'},
//   {animal: 'elephant', weight: 1800, name: 'Nadim'}
// ]
//
// const elephants = filter(where({animal: equals('elephant')}));
// const weight   = compose(flip(lt)(5000), sum, pluck('weight'), elephants);
// const weight   = compose(weight => weight <= 5000, sum, pluck('weight'), elephants);

const {compose, sum, values, map, apply, subtract, zip} = R;

describe("distance", () => {
  it("should calculate the distance of a 2D point from 0/0", () => {
    expect(distance(
      [[0, 0],
      [4, 3]]
    )).toEqual(5);
  });

  it("should calculate the distance of two 2D points", () => {
    expect(distance(
      [[1, 1],
      [5, 4]]
    )).toEqual(5);
  });


});

describe("square", () => {
  it("should return the square of a number", () => {
    expect(square(2)).toEqual(4);
  });
});

const x = pos => pos[0];
const y = pos => pos[1];

const square = x => x**2;
const absDelta = compose(Math.abs, apply(subtract));
const distance = compose(Math.sqrt, sum, map(square), map(absDelta), apply(zip));
