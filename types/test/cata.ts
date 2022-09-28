import * as RA from 'ramda-adjunct';

const result1 = RA.cata(
  () => 1,
  () => true,
  { cata: () => '' }
);
result1; // $ExpectType number | boolean

const result2 = RA.cata(
  () => 1,
  () => true
)({ cata: () => '' });
result2; // $ExpectType number | boolean

const result3 = RA.cata<string, string, number, boolean>(() => 1)(() => true, {
  cata: () => '',
});
result3; // $ExpectType number | boolean

const result4 = RA.cata<string, string, number, boolean>(() => 1)(() => true)({
  cata: () => '',
});
result4; // $ExpectType number | boolean

// @ts-expect-error
RA.cata(1, true, {});
