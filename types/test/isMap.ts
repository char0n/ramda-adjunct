import * as RA from 'ramda-adjunct';

RA.isMap(new Map()); // $ExpectType boolean
RA.isMap(
  new Map([
    [1, 2],
    [2, 1],
  ])
); // $ExpectType boolean
RA.isMap(new Set()); // $ExpectType boolean
RA.isMap(new Set([1, 2])); // $ExpectType boolean
RA.isMap(+0); // $ExpectType boolean
RA.isMap(null); // $ExpectType boolean
RA.isMap(true); // $ExpectType boolean
RA.isMap(NaN); // $ExpectType boolean
RA.isMap({}); // $ExpectType boolean
RA.isMap([]); // $ExpectType boolean
RA.isMap(() => {}); // $ExpectType boolean
RA.isMap('string'); // $ExpectType boolean
RA.isMap(1); // $ExpectType boolean
RA.isMap(Object()); // $ExpectType boolean
RA.isMap(Object(5)); // $ExpectType boolean
