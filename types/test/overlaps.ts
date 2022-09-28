import * as RA from 'ramda-adjunct';

RA.overlaps(['-'], ['a']); // $ExpectType boolean
RA.overlaps([2], [1]); // $ExpectType boolean
RA.overlaps([2], [1, 2]); // $ExpectType boolean
RA.overlaps([2, ''], [1, 2]); // $ExpectType boolean
RA.overlaps([2, null], [1, 2]); // $ExpectType boolean
RA.overlaps([2])([1, 2]); // $ExpectType boolean

// @ts-expect-error
RA.overlaps(1, 2);
// @ts-expect-error
RA.overlaps('#', '10');
// @ts-expect-error
RA.overlaps(['#'], '10');
// @ts-expect-error
RA.overlaps([undefined], undefined);
// @ts-expect-error
RA.overlaps(undefined, [undefined]);
// @ts-expect-error
RA.overlaps(null, [undefined]);
// @ts-expect-error
RA.overlaps(() => {}, [undefined]);
