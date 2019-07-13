import * as RA from "ramda-adjunct";

RA.allIdenticalTo(1, [1, 2, 3, 4]); // $ExpectType boolean
RA.allIdenticalTo(1, []); // $ExpectType boolean
