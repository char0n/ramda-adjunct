import * as RA from 'ramda-adjunct';

RA.isSet(new Set()); // $ExpectType boolean
RA.isSet(new Set([1, 2])); // $ExpectType boolean
RA.isSet(+0); // $ExpectType boolean
RA.isSet(null); // $ExpectType boolean
RA.isSet(true); // $ExpectType boolean
RA.isSet(NaN); // $ExpectType boolean
RA.isSet({}); // $ExpectType boolean
RA.isSet([]); // $ExpectType boolean
RA.isSet(() => {}); // $ExpectType boolean
RA.isSet('string'); // $ExpectType boolean
RA.isSet(1); // $ExpectType boolean
RA.isSet(Object()); // $ExpectType boolean
RA.isSet(Object(5)); // $ExpectType boolean
RA.isSet(new Map()); // $ExpectType boolean
