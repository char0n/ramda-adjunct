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

RA.sortByProps(['name'])(people); // $ExpectType object[]
RA.sortByProps(['p'])(people); // $ExpectType object[]
RA.sortByProps(['lastName', 'name'])(people); // $ExpectType object[]
RA.sortByProps(['lastName', 'p', 'name'])(people); // $ExpectType object[]

RA.sortByProps(['name'])(123); // $ExpectError
RA.sortByProps(123)(people); // $ExpectError
