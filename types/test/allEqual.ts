import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allEqual([1, 2, 3, 4]); // $ExpectType boolean
RA.allEqual(['a', 'b', 'c', 'd']); // $ExpectType boolean
RA.allEqual([1, 'b', 2, 'd']); // $ExpectType boolean
RA.allEqual([]); // $ExpectType boolean
// @ts-expect-error
RA.allEqual(customIterable);
