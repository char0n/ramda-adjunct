import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

expectType<object>(RA.renameKeyWith((str) => `a${str}`, 'A', { A: 1 }));
expectType<object>(RA.renameKeyWith((str) => `a${str}`)('A', { A: 1 }));
expectType<object>(RA.renameKeyWith((str) => `a${str}`)('A')({ A: 1 }));
expectType<object>(RA.renameKeyWith((str) => `a${str}`, 'A')({ A: 1 }));

expectError(RA.renameKeyWith((str) => 1, 'A', { A: 1 }));
expectError(RA.renameKeyWith((str) => `a${str}`, 1, { A: 1 }));
expectError(RA.renameKeyWith((str) => `a${str}`, 'A', 1));
