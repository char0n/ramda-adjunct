import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.allIdentical([1, 2, 3, 4]));
expectType<boolean>(RA.allIdentical([]));

expectError(RA.allIdentical({}));
expectError(RA.allIdentical('a'));
expectError(RA.allIdentical(customIterable));
