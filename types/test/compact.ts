import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

class TestObject {
  test = 'test' as const;
}

expectType<string[]>(RA.compact(['string', '']));
expectType<true[]>(RA.compact([true, false]));
expectType<number[]>(RA.compact([1, ''] as Array<number | ''>));
expectType<TestObject[]>(RA.compact([new TestObject(), null, undefined]));
expectType<string[]>(RA.compact(['string', false] as Array<string | false>));
expectType<1[]>(RA.compact([1, 0] as Array<1 | 0>));
expectType<(string | number | TestObject)[]>(RA.compact([new TestObject(), false, 0, null, NaN, undefined, ''] as Array<TestObject | false | 0 | null | number | undefined | string>));

expectError(RA.compact(new TestObject()));
expectError(RA.compact('string'));
expectError(RA.compact(1));
expectError(RA.compact({}));
