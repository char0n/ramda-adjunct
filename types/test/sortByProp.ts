import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

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

expectType<{ name: string; age: number; lastName: string; }[]>(RA.sortByProp('name')(people));
expectType<{ name: string; age: number; lastName: string; }[]>(RA.sortByProp('p')(people));
// $ExpectType number[][]
RA.sortByProp(0)([
  [1, 2],
  [3, 4],
]);

expectError(RA.sortByProp('name')(123));
