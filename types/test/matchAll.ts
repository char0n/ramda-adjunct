import * as RA from 'ramda-adjunct';

RA.matchAll(/x/g, "xxx"); // $ExpectType string[][]
