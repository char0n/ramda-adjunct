import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<boolean>(RA.notEqual(1, 1));
expectType<boolean>(RA.notEqual(1, ''));
expectType<boolean>(RA.notEqual('', ''));
expectType<boolean>(RA.notEqual([], [1]));
expectType<boolean>(RA.notEqual([1, 2, 3, 4], []));
expectType<boolean>(RA.notEqual(['a', 'b', 'c', 'd'], {}));

expectType<boolean>(RA.notEqual([1])([1]));
expectType<boolean>(RA.notEqual(1)(1));
