import * as RA from 'ramda-adjunct';

/* eslint-disable  no-unused-expressions */

RA.renameKeys({ A: 'B' } as const, { A: 1, C: 4 }).B; // $ExpectType number
RA.renameKeys({ A: 'B' }, { A: 1, C: 4 }).B; // $ExpectType number

// @ts-expect-error
RA.renameKeys(1, { A: 1, C: 4 });
// @ts-expect-error
RA.renameKeys(1, 2);
// @ts-expect-error
RA.renameKeys({ A: 'B' }, 2);
