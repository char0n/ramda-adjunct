import * as RA from 'ramda-adjunct';

RA.invoke(['random'], Math); // $ExpectType any
RA.invoke(['nonexistentMethod'], Math); // $ExpectType any

// @ts-expect-error
RA.invoke([0, 'a'], Math);
// @ts-expect-error
RA.invoke([{}], Math);
// @ts-expect-error
RA.invoke([0], Math);
