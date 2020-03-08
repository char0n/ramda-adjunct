import * as RA from 'ramda-adjunct';

RA.isIndexed(-0); // $ExpectType boolean
RA.isIndexed(+0); // $ExpectType boolean
RA.isIndexed(null); // $ExpectType boolean
RA.isIndexed(true); // $ExpectType boolean
RA.isIndexed(NaN); // $ExpectType boolean
RA.isIndexed({}); // $ExpectType boolean
RA.isIndexed([]); // $ExpectType boolean
RA.isIndexed(() => {}); // $ExpectType boolean
RA.isIndexed('string'); // $ExpectType boolean
RA.isIndexed(1); // $ExpectType boolean
RA.isIndexed(0.1); // $ExpectType boolean
RA.isIndexed(Object(0.1)); // $ExpectType boolean
RA.isIndexed(NaN); // $ExpectType boolean
RA.isIndexed(Infinity); // $ExpectType boolean
RA.isIndexed(Number.MAX_VALUE); // $ExpectType boolean
RA.isIndexed(Number.MIN_VALUE); // $ExpectType boolean
