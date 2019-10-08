import * as RA from "ramda-adjunct";

import { customIterable } from './helpers';

RA.allIdentical([1, 2, 3, 4]); // $ExpectType boolean
RA.allIdentical([]); // $ExpectType boolean

RA.allIdentical({}); // $ExpectError
RA.allIdentical('a'); // $ExpectError
RA.allIdentical(customIterable); // $ExpectError
