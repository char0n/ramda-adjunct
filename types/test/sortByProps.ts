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

expectType<object[]>(RA.sortByProps(['name'])(people));
expectType<object[]>(RA.sortByProps(['p'])(people));
expectType<object[]>(RA.sortByProps(['lastName', 'name'])(people));
expectType<object[]>(RA.sortByProps(['lastName', 'p', 'name'])(people));

expectError(RA.sortByProps(['name'])(123));
expectError(RA.sortByProps(123)(people));
