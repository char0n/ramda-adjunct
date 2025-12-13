import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.allEqualTo(1, [1, 2, 3, 4]));
expectType<boolean>(RA.allEqualTo(1, []));
expectType<boolean>(RA.allEqualTo(1)([1, 2, 3, 4]));
expectType<boolean>(RA.allEqualTo(1)([]));

expectError(RA.allEqualTo(1, {}));
expectError(RA.allEqualTo(1, 'a'));
expectError(RA.allEqualTo(1, customIterable));
