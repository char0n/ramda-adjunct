import * as RA from 'ramda-adjunct';

RA.isPrototypeOf(Object, {}); // $ExpectType boolean
RA.isPrototypeOf(Array, []); // $ExpectType boolean
RA.isPrototypeOf(Array, []); // $ExpectType boolean
RA.isPrototypeOf(Array, () => {}); // $ExpectType boolean
RA.isPrototypeOf(Function, () => {}); // $ExpectType boolean
RA.isPrototypeOf(Object, () => {}); // $ExpectType boolean
RA.isPrototypeOf(RegExp, /my regex/gi); // $ExpectType boolean

RA.isPrototypeOf(Object)({}); // $ExpectType boolean
RA.isPrototypeOf(Array)([]); // $ExpectType boolean

// @ts-expect-error
RA.isPrototypeOf(null, {});
