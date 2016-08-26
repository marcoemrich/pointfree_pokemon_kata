const {
  compose, sum, values, map, apply,
  subtract, zip, filter, count, where,
  equals, pluck, curry, curryN, reduce, min
} = R;

const mons = [
  {type: 'Flying', name: 'Pidgey', position: [27, 90]},
  {type: 'Poison', name: 'Nidoran', position: [66, 12]},
  {type: 'Poison', name: 'Bell sprout', position: [99, 99]},
  {type: 'Normal', name: 'Mewtwo', position: [24, 12]},
  {type: 'Water', name: 'Magikarp', position: [0, 8]},
  {type: 'Normal', name: 'Rattata', position: [5, 30]},
  {type: 'Normal', name: 'Rattata', position: [80, 44]},
  {type: 'Normal', name: 'Zubat', position: [81, 46]},
  {type: 'Ice', name: 'Lapras', position: [20, 94]},
]

const playerPosition = [4, 3];

// position -> number
const x = pos => pos[0];

// position -> number
const y = pos => pos[1];

// number -> number
const square = x => x**2;

// [numbers] -> number
const absDelta = compose(Math.abs, apply(subtract));

const toArray = (...args) => args

// [positions] -> number
const distance = curryN(
  2, compose(Math.sqrt, sum, map(square), map(absDelta), apply(zip), toArray)
);

const debug = curry((title, value) => {
  console.log(title, value);
  return value;
})

describe("PokemonApp" , () => {
  it("should find the nearest Pokemon distance", () => {
    expect(
      compose(reduce(min, 100),
              map(distance(playerPosition)),
              pluck("position"),
              filter(where({type: equals("Normal")}))
            )(mons)
    ).toBeCloseTo(21.9, 1);
  })
});

describe("distance", () => {
  it("should calculate the distance of a 2D point from 0/0", () => {
    expect(distance(
      [0, 0],
      [4, 3]
    )).toEqual(5);
  });

  it("should calculate the distance of two 2D points", () => {
    expect(distance(
      [1, 1],
      [5, 4]
    )).toEqual(5);
  });
});

describe("square", () => {
  it("should return the square of a number", () => {
    expect(square(2)).toEqual(4);
  });
});
