import * as RA from 'ramda-adjunct';

RA.invokeArgs(['abs'], [-1], Math); // $ExpectType number
RA.invokeArgs(['nonexistentMethod'], [-1], Math); // $ExpectType undefined