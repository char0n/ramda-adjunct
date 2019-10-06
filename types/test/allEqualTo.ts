import * as RA from "ramda-adjunct";

import { customIterable } from './helpers';

RA.allEqualTo(1, [1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1, []); // $ExpectType boolean
RA.allEqualTo(1)([1, 2, 3, 4]); // $ExpectType boolean
RA.allEqualTo(1)([]); // $ExpectType boolean

RA.allEqualTo(1, {}); // $ExpectError
RA.allEqualTo(1, 'a'); // $ExpectError
RA.allEqualTo(1, customIterable); // $ExpectError
