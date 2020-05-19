import * as RA from 'ramda-adjunct';

RA.isPrimitive(3); // $ExpectType boolean
RA.isPrimitive(''); // $ExpectType boolean
RA.isPrimitive(true); // $ExpectType boolean
RA.isPrimitive(null); // $ExpectType boolean
RA.isPrimitive(undefined); // $ExpectType boolean
RA.isPrimitive(Symbol.for('')); // $ExpectType boolean
RA.isPrimitive([]); // $ExpectType boolean
RA.isPrimitive({}); // $ExpectType boolean
RA.isPrimitive(() => {}); // $ExpectType boolean
RA.isPrimitive(new Set()); // $ExpectType boolean
