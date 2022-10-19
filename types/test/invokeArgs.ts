import * as RA from 'ramda-adjunct';

RA.invokeArgs(['abs'], [-1], Math); // $ExpectType any
RA.invokeArgs(['nonexistentMethod'], [-1], Math); // $ExpectType any
// @ts-expect-error
RA.invokeArgs([0, 'a'], [-1], Math);
// @ts-expect-error
RA.invokeArgs([{}], [-1], Math);
// @ts-expect-error
RA.invokeArgs([0], {}, Math);
