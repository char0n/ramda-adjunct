import * as RA from "ramda-adjunct";

RA.allEqualTo(1, [1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1, []); // $ExpectType boolean
RA.allEqualTo(1)([1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1)([]); // $ExpectType boolean
