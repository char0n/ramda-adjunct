import * as RA from 'ramda-adjunct';

RA.unzipObjWith((v, t) => [t, 1], { a: 'b' }); // $ExpectType [string[], number[]]
