import * as RA from 'ramda-adjunct';

RA.overlaps(['-'], ['a']); // $ExpectType boolean
RA.overlaps([2], [1]); // $ExpectType boolean
RA.overlaps([2], [1, 2]); // $ExpectType boolean
RA.overlaps([2, ''], [1, 2]); // $ExpectType boolean
RA.overlaps([2, null], [1, 2]); // $ExpectType boolean
RA.overlaps([2])([1, 2]); // $ExpectType boolean

RA.overlaps(1, 2); // $ExpectError
RA.overlaps('#', '10'); // $ExpectError
RA.overlaps(['#'], '10'); // $ExpectError
RA.overlaps([undefined], undefined); // $ExpectError
RA.overlaps(undefined, [undefined]); // $ExpectError
RA.overlaps(null, [undefined]); // $ExpectError
RA.overlaps(() => {}, [undefined]); // $ExpectError
