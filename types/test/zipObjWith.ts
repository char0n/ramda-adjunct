import * as RA from 'ramda-adjunct';

RA.zipObjWith((v, t) => [t, 1], ['a'], [2]); // $ExpectType {}
