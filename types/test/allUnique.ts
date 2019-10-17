import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allUnique([1, 2, 3, 4]); // $ExpectType boolean
RA.allUnique(['a', 'b', 'c', 'd']); // $ExpectType boolean
RA.allUnique([1, 'b', 2, 'd']); // $ExpectType boolean
RA.allUnique([]); // $ExpectType boolean

RA.allUnique(1); // $ExpectError
RA.allUnique({}); // $ExpectError
RA.allUnique(customIterable); // $ExpectError
