import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

const result1 = RA.cata(
  () => 1,
  () => true,
  { cata: () => '' }
);
expectType<number | boolean>(result1);

const result2 = RA.cata(
  () => 1,
  () => true
)({ cata: () => '' });
expectType<number | boolean>(result2);

const result3 = RA.cata<string, string, number, boolean>(() => 1)(() => true, {
  cata: () => '',
});
expectType<number | boolean>(result3);

const result4 = RA.cata<string, string, number, boolean>(() => 1)(() => true)({
  cata: () => '',
});
expectType<number | boolean>(result4);

expectError(RA.cata(1, true, {}));
