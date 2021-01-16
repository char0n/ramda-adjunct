import * as RA from 'ramda-adjunct';

RA.isError(3); // $ExpectType boolean
RA.isError(null); // $ExpectType boolean
RA.isError(undefined); // $ExpectType boolean
RA.isError('hi'); // $ExpectType boolean
RA.isError([1, 2, 3]); // $ExpectType boolean
RA.isError({ key: 'value' }); // $ExpectType boolean
RA.isError(new Set([1, 8, -7])); // $ExpectType boolean
RA.isError(() => {}); // $ExpectType boolean
RA.isError(new Error()); // $ExpectType boolean
RA.isError(new SyntaxError()); // $ExpectType boolean
RA.isError(new TypeError()); // $ExpectType boolean
RA.isError(new ReferenceError()); // $ExpectType boolean
RA.isError(new RangeError()); // $ExpectType boolean
