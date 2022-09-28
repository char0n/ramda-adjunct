import * as RA from 'ramda-adjunct';

/**
 * Helpers.
 */

const combiningPredicate =
  <T>(predicateFn: Function) =>
  (iterable: T[]): boolean =>
    iterable.reduce((acc: boolean, val: T) => acc && predicateFn(val), true);

const nonBoolPredicate = (val: string): string => val;

const nonCurriedCombiningPredicate = <T>(
  predicateFn: Function,
  iterable: T[]
): boolean =>
  iterable.reduce((acc: boolean, val: T) => acc && predicateFn(val), true);

/**
 * Tests.
 */

RA.argsPass(combiningPredicate, [Boolean, Boolean])(1, 2); // $ExpectType boolean
RA.argsPass(combiningPredicate)([Boolean, Boolean])(1, 2); // $ExpectType boolean
RA.argsPass(combiningPredicate, [Boolean, Boolean])('a', 'b'); // $ExpectType boolean
RA.argsPass(combiningPredicate)([Boolean, Boolean])('a', 'b'); // $ExpectType boolean
RA.argsPass(combiningPredicate, [Boolean, Boolean])('a', 2); // $ExpectType boolean
RA.argsPass(combiningPredicate)([Boolean, Boolean])('a', 2); // $ExpectType boolean
RA.argsPass(combiningPredicate, [Boolean, Boolean])(); // $ExpectType boolean

RA.argsPass(combiningPredicate)([Boolean, Boolean])(); // $ExpectType boolean

// @ts-expect-error
RA.argsPass(nonCurriedCombiningPredicate, [Boolean, Boolean])(1, 2);

// @ts-expect-error
RA.argsPass(combiningPredicate, [nonBoolPredicate])(1, 2);
