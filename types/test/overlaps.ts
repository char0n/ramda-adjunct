import * as RA from 'ramda-adjunct';

RA.overlaps(['-'], ['a']); // $ExpectType boolean
RA.overlaps(['-'])(['a']); // $ExpectType boolean
RA.overlaps([2], [1]); // $ExpectType boolean
RA.overlaps([2], [1, 2]); // $ExpectType boolean
RA.overlaps([2])([1, 2]); // $ExpectType boolean
RA.overlaps([2, ''], [1, 2]); // $ExpectType boolean
RA.overlaps([2, null], [1, 2]); // $ExpectType boolean
RA.overlaps([2, null])([1, 2, null]); // $ExpectType boolean

RA.overlaps(1, 2); // $ExpectError
RA.overlaps(1)(2); // $ExpectError
RA.overlaps([1])(2); // $ExpectError
RA.overlaps(1)([2]); // $ExpectError
RA.overlaps('#', '10'); // $ExpectError
RA.overlaps('#')('10'); // $ExpectError
RA.overlaps(['#'])('10'); // $ExpectError
RA.overlaps('#')(['10']); // $ExpectError
RA.overlaps(undefined, undefined, 54); // $ExpectError
RA.overlaps(1, 2, 3); // $ExpectError
RA.overlaps([1], [2], [3]); // $ExpectError
RA.overlaps([undefined], [undefined], 54); // $ExpectError
RA.overlaps([undefined], undefined); // $ExpectError
RA.overlaps(undefined, [undefined]); // $ExpectError
RA.overlaps([undefined])(undefined); // $ExpectError
RA.overlaps([1])(['']); // $ExpectError
RA.overlaps([null])([0]); // $ExpectError
RA.overlaps([0])([0, '']); // $ExpectError
RA.overlaps([0, ''])([0, null]); // $ExpectError
