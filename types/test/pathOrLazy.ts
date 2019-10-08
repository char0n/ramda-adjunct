import * as RA from 'ramda-adjunct';

RA.pathOrLazy(() => 7, ['a', 1, 'b'], {}); // $ExpectType number
RA.pathOrLazy(() => 7, ['a', 1, 'b'])({}); // $ExpectType number
RA.pathOrLazy(() => 7)(['a', 1, 'b'], {}); // $ExpectType number
RA.pathOrLazy(() => 7)(['a', 1, 'b'])({}); // $ExpectType number
