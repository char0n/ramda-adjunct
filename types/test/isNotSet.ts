import * as RA from 'ramda-adjunct';

RA.isNotSet(new Set()); // $ExpectType boolean
RA.isNotSet(new Set([1, 2])); // $ExpectType boolean
RA.isNotSet(+0); // $ExpectType boolean
RA.isNotSet(null); // $ExpectType boolean
RA.isNotSet(true); // $ExpectType boolean
RA.isNotSet(NaN); // $ExpectType boolean
RA.isNotSet({}); // $ExpectType boolean
RA.isNotSet([]); // $ExpectType boolean
RA.isNotSet(() => {}); // $ExpectType boolean
RA.isNotSet('string'); // $ExpectType boolean
RA.isNotSet(1); // $ExpectType boolean
RA.isNotSet(Object()); // $ExpectType boolean
RA.isNotSet(Object(5)); // $ExpectType boolean
RA.isNotSet(new Map()); // $ExpectType boolean
