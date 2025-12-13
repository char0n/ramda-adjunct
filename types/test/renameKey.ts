import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

// object with string as key
expectType<number>(RA.renameKey('A', 'B', { A: 1, C: 4 }).B);
expectType<number>(RA.renameKey('A')('B')({ A: 1, C: '123', D: 123 }).B);
expectType<number>(RA.renameKey('A', 'B')({ A: 1, C: 4, D: 123 }).B);

// object with number as key
expectType<string>(RA.renameKey(1, 99, { 1: 'one', 2: 'two', 3: 'three' })[99]);

// object with symbol as key
const symbol = Symbol('hello');

expectType<number>(RA.renameKey(symbol, 'B', { [symbol]: 1, B: 2, C: 3 }).B);
expectType<number>(RA.renameKey('A', symbol, { A: 1, B: 2, C: 3 })[symbol]);

expectError(RA.renameKey('Z', 'B', { A: 1, C: 4 }));
expectError(RA.renameKey('A', 'B', { C: 4 }));
expectError(RA.renameKey({ A: 1, C: 4 }, 'A', 'B'));
expectError(RA.renameKey('A', { A: 1, C: 4 }, 'B'));
