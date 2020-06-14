import * as RA from 'ramda-adjunct';

RA.pathOrLazy(() => 7, ['a', 1, 'b'], {}); // $ExpectType unknown
RA.pathOrLazy(() => 7, ['a', 1, 'b'])({}); // $ExpectType unknown
RA.pathOrLazy(() => 7)(['a', 1, 'b'], {}); // $ExpectType unknown
RA.pathOrLazy(() => 7)(['a', 1, 'b'])({}); // $ExpectType unknown
