import * as RA from 'ramda-adjunct';

/**
 * Helpers.
 */

const customIterable = {
    *[Symbol.iterator](): IterableIterator<number> {
        yield 1;
        yield 2;
        yield 3;
    },
};

/**
 * Tests.
 */

RA.allSettledP([1, 2]); // $ExpectType Promise<SettledPromise<number>[]>
RA.allSettledP(['a', 'b']); // $ExpectType Promise<SettledPromise<string>[]>
RA.allSettledP([1, 'a']); // $ExpectType Promise<SettledPromise<string | number>[]>
RA.allSettledP([]); // $ExpectType Promise<SettledPromise<never>[]>
RA.allSettledP(customIterable); // $ExpectType Promise<SettledPromise<number>[]>
