import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<number>(RA.renameKeys({ A: 'B' } as const, { A: 1, C: 4 }).B);
expectType<number>(RA.renameKeys({ A: 'B' }, { A: 1, C: 4 }).B);

expectError(RA.renameKeys(1, { A: 1, C: 4 }));
expectError(RA.renameKeys(1, 2));
expectError(RA.renameKeys({ A: 'B' }, 2));
