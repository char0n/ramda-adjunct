import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.notAllEqual([1, 2, 3, 4]); // $ExpectType boolean
RA.notAllEqual(['a', 'b', 'c', 'd']); // $ExpectType boolean
RA.notAllEqual([1, 'b', 2, 'd']); // $ExpectType boolean
RA.notAllEqual([]); // $ExpectType boolean

RA.notAllEqual(1); // $ExpectError
RA.notAllEqual({}); // $ExpectError
RA.notAllEqual(customIterable); // $ExpectError
