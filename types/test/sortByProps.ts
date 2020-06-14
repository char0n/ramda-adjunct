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
const immutablePeople = [clara, bob, alice] as const;
const mutablePeople = [clara, bob];
const immutableProps = ['lastName', 'name'] as const;
const mutableProps = ['age'];

// tslint:disable:max-line-length
RA.sortByProps(mutableProps)(immutablePeople); // $ExpectType ({ name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; })[]
RA.sortByProps(['p'])(immutablePeople); // $ExpectType ({ name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; })[]
RA.sortByProps(immutableProps, immutablePeople); // $ExpectType ({ name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; } | { name: string; age: number; lastName: string; })[]
RA.sortByProps(immutableProps)(mutablePeople); // $ExpectType { name: string; age: number; lastName: string; }[]
RA.sortByProps(mutableProps)(mutablePeople); // $ExpectType { name: string; age: number; lastName: string; }[]
// tslint:enable:max-line-length

RA.sortByProps(['name'])(123); // $ExpectError
RA.sortByProps(['lastName', 'p', 'name'], mutablePeople); // $ExpectError
RA.sortByProps(123)(immutablePeople); // $ExpectError
