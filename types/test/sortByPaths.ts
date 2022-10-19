import * as RA from 'ramda-adjunct';

const alice = {
  name: 'Alice',
  address: {
    street: 31,
    zipCode: 97777,
  },
};
const bob = {
  name: 'Bob',
  address: {
    street: 31,
    zipCode: 55555,
  },
};
const clara = {
  name: 'Clara',
  address: {
    street: 32,
    zipCode: 90210,
  },
};
const people = [clara, bob, alice];

RA.sortByPaths([['name']])(people); // $ExpectType object[]
// $ExpectType object[]
RA.sortByPaths([
  ['address', 'street'],
  ['address', 'zipCode'],
])(people);
RA.sortByPaths([])(people); // $ExpectType object[]

// @ts-expect-error
RA.sortByPaths([['name']])(123);
// @ts-expect-error
RA.sortByPaths(123)(people);
