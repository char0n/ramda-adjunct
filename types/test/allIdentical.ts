import * as RA from "ramda-adjunct";

RA.allIdentical([1, 2, 3, 4]); // $ExpectType boolean
RA.allIdentical([]); // $ExpectType boolean
