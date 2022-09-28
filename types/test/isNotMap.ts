import * as RA from 'ramda-adjunct';

RA.isNotMap(new Map()); // $ExpectType boolean
RA.isNotMap(
  new Map([
    [1, 2],
    [2, 1],
  ])
); // $ExpectType boolean
RA.isNotMap(new Set()); // $ExpectType boolean
RA.isNotMap(new Set([1, 2])); // $ExpectType boolean
RA.isNotMap(+0); // $ExpectType boolean
RA.isNotMap(null); // $ExpectType boolean
RA.isNotMap(true); // $ExpectType boolean
RA.isNotMap(NaN); // $ExpectType boolean
RA.isNotMap({}); // $ExpectType boolean
RA.isNotMap([]); // $ExpectType boolean
RA.isNotMap(() => {}); // $ExpectType boolean
RA.isNotMap('string'); // $ExpectType boolean
RA.isNotMap(1); // $ExpectType boolean
RA.isNotMap(Object()); // $ExpectType boolean
RA.isNotMap(Object(5)); // $ExpectType boolean
