import * as RA from 'ramda-adjunct';
import { expectType } from 'tsd';

expectType<number>(RA.pathOrLazy(() => 7, ['a', 1, 'b'], {}));
expectType<number>(RA.pathOrLazy(() => 7, ['a', 1, 'b'])({}));
expectType<number>(RA.pathOrLazy(() => 7)(['a', 1, 'b'], {}));
expectType<number>(RA.pathOrLazy(() => 7)(['a', 1, 'b'])({}));
