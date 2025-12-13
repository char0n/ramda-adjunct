import * as RA from 'ramda-adjunct';

import { customIterable } from './helpers';
import { expectType, expectError } from 'tsd';

expectType<boolean>(RA.allIdenticalTo(1, [1, 2, 3, 4]));
expectType<boolean>(RA.allIdenticalTo(1, []));
expectType<boolean>(RA.allIdenticalTo(1)([]));

expectError(RA.allIdenticalTo('a', [1, 2]));
expectError(RA.allIdenticalTo(1, customIterable));
