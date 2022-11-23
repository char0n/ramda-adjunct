import * as RA from 'ramda-adjunct';

const alice = {
  name: 'ALICE',
  age: 101,
  lastName: 'Smith',
};
const bob = {
  name: 'Bob',
  age: -10,
  lastName: 'Smith',
};
const clara = {
  name: 'clara',
  age: 314.159,
  lastName: 'Kris',
};
const people = [clara, bob, alice];

RA.sortByProp('name')(people); // $ExpectType object[]
RA.sortByProp('p')(people); // $ExpectType object[]
// $ExpectType object[]
RA.sortByProp(0)([
  [1, 2],
  [3, 4],
]);

// @ts-expect-error
RA.sortByProp('name')(123);
