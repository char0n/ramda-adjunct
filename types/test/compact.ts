import * as RA from 'ramda-adjunct';

class TestObject {
  test = 'test' as const;
}

RA.compact(['string', '']); // $ExpectType string[]
RA.compact([true, false]); // $ExpectType true[]
RA.compact([1, ''] as Array<number | ''>); // $ExpectType number[]
RA.compact([new TestObject(), null, undefined]); // $ExpectType TestObject[]
RA.compact(['string', false]); // $ExpectType (string | true)[]
RA.compact([1, 0] as Array<1 | 0>); // $ExpectType 1[]
RA.compact([new TestObject(), false, 0, null, NaN, undefined, '']); // $ExpectType (string | number | true | TestObject)[]

// @ts-expect-error
RA.compact(new TestObject());
// @ts-expect-error
RA.compact('string');
// @ts-expect-error
RA.compact(1);
// @ts-expect-error
RA.compact({});
