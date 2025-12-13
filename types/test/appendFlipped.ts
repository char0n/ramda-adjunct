import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<number[]>(RA.appendFlipped([1, 2], 3));
expectType<string[]>(RA.appendFlipped(['a', 'b'], 'c'));
expectType<(string | number)[]>(RA.appendFlipped(['a', 2], 3));
expectType<number[]>(RA.appendFlipped<number>([1, 2], 3));
expectType<string[]>(RA.appendFlipped<string>(['a', 'b'], 'c'));

expectError(RA.appendFlipped<string>([1, 'b'], 'c'));
expectError(RA.appendFlipped<string>([1, 'b'])('c'));
expectError(RA.appendFlipped(1, 'c'));
expectError(RA.appendFlipped(1)('c'));
expectError(RA.appendFlipped(customIterable, 'c'));
expectError(RA.appendFlipped(customIterable)('c'));
