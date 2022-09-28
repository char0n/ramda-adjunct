import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';

RA.allIdentical([1, 2, 3, 4]); // $ExpectType boolean
RA.allIdentical([]); // $ExpectType boolean

// @ts-expect-error
RA.allIdentical({});
// @ts-expect-error
RA.allIdentical('a');
// @ts-expect-error
RA.allIdentical(customIterable);
