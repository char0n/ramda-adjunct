import * as RA from 'ramda-adjunct';

/* eslint-disable no-unused-expressions */

// object with string as key
RA.renameKey('A', 'B', { A: 1, C: 4 }).B; // $ExpectType number
RA.renameKey('A')('B')({ A: 1, C: '123', D: 123 }).B // $ExpectType number
RA.renameKey('A', 'B')({ A: 1, C: 4, D: 123 }).B; // $ExpectType number

// Object with number as key
RA.renameKey(1, 99, { 1: 'one', 2: 'two', 3: 'three' })[99]; // $ExpectType string

// Object with symbol as key
const symbol = Symbol('hello')

RA.renameKey(symbol, 'B', { [symbol]: 1, B: 2, C: 3 }).B; // $ExpectType number
RA.renameKey('A', symbol, { A: 1, B: 2, C: 3 })[symbol]; // $ExpectType number


// @ts-expect-error
RA.renameKey('Z', 'B', { A: 1, C: 4 })
// @ts-expect-error
RA.renameKey('A', 'B', { C: 4 })
// @ts-expect-error
RA.renameKey({ A: 1, C: 4 }, 'A', 'B')
// @ts-expect-error
RA.renameKey('A', { A: 1, C: 4 }, 'B')
