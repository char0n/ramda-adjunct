import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allIdenticalTo(1, [1, 2, 3, 4]); // $ExpectType boolean
RA.allIdenticalTo(1, []); // $ExpectType boolean
RA.allIdenticalTo(1)([]); // $ExpectType boolean

// @ts-expect-error
RA.allIdenticalTo('a', [1, 2]);
// @ts-expect-error
RA.allIdenticalTo(1, customIterable);
