import * as RA from 'ramda-adjunct';

RA.notEqual(1, 1); // $ExpectType boolean
RA.notEqual(1, ''); // $ExpectType boolean
RA.notEqual('', ''); // $ExpectType boolean
RA.notEqual([], [1]); // $ExpectType boolean
RA.notEqual([1, 2, 3, 4], []); // $ExpectType boolean
RA.notEqual(['a', 'b', 'c', 'd'], {}); // $ExpectType boolean

RA.notEqual([1])([1]); // $ExpectType boolean
RA.notEqual(1)(1); // $ExpectType boolean
