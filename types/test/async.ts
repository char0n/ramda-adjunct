import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<Function>(RA.async(() => {}));
expectError(RA.async(1));
expectError(RA.async(''));
expectError(RA.async({}));
