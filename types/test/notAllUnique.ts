import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.notAllUnique([1, 2, 3, 4]); // $ExpectType boolean
RA.notAllUnique(['a', 'b', 'c', 'd']); // $ExpectType boolean
RA.notAllUnique([1, 'b', 2, 'd']); // $ExpectType boolean
RA.notAllUnique([]); // $ExpectType boolean

// @ts-expect-error
RA.notAllUnique(1);
// @ts-expect-error
RA.notAllUnique({});
// @ts-expect-error
RA.notAllUnique(customIterable);
