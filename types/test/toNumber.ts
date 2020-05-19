import * as RA from 'ramda-adjunct';

RA.toNumber([1, 2, 3]); // $ExpectType number
RA.toNumber(null); // $ExpectType number
RA.toNumber(undefined); // $ExpectType number
RA.toNumber(1); // $ExpectType number
RA.toNumber({}); // $ExpectType number
RA.toNumber(() => {}); // $ExpectType number
RA.toNumber('1'); // $ExpectType number
RA.toNumber(Object.create(null)); // $ExpectType number
RA.toNumber(Symbol.for('')); // $ExpectType number
