import * as RA from "ramda-adjunct";

RA.allEqual([ 1, 2, 3, 4 ]); // $ExpectType boolean

RA.allEqualTo(1, [ 1, 2, 3, 4 ]); // $ExpectType boolean
RA.allEqualTo(1)([ 1, 2, 3, 4 ]); // $ExpectType boolean

RA.allIdentical([ 1, 2, 3, 4 ]); // $ExpectType boolean
