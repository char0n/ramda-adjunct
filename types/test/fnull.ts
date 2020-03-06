import * as RA from 'ramda-adjunct';

const fn = (v: any) => v;

RA.fnull(fn)(['abc']); // $ExpectType Function
RA.fnull(fn, ['a']); // $ExpectType Function
RA.fnull(fn, ['hello']); // $ExpectType Function

RA.fnull(fn, 'afsd'); // $ExpectError
RA.fnull('12', 54); // $ExpectError
RA.fnull(null, 'a'); // $ExpectError
RA.fnull(undefined, 12); // $ExpectError
RA.fnull(undefined, 'abc'); // $ExpectError
