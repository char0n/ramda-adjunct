import * as RA from 'ramda-adjunct';

const fn = (v: unknown) => v;

RA.fnull(fn)(['abc']); // $ExpectType Function
RA.fnull(fn, ['a']); // $ExpectType Function
RA.fnull(fn, ['hello']); // $ExpectType Function

// @ts-expect-error
RA.fnull(fn, 'afsd');
// @ts-expect-error
RA.fnull('12', 54);
// @ts-expect-error
RA.fnull(null, 'a');
// @ts-expect-error
RA.fnull(undefined, 12);
// @ts-expect-error
RA.fnull(undefined, 'abc');
