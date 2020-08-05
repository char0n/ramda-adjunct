import * as RA from 'ramda-adjunct';

RA.invoke(['abs'], Math); // $ExpectType any
RA.invoke(['nonexistentMethod'], Math); // $ExpectType any
RA.invoke([0, 'a'], Math); // $ExpectError
RA.invoke([{}], Math); // $ExpectError
RA.invoke([0], Math); // $ExpectError
