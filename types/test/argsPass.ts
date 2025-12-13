import * as RA from 'ramda-adjunct';
import { expectType, expectError } from 'tsd';

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

expectType<boolean>(RA.argsPass(combiningPredicate, [Boolean, Boolean])(1, 2));
expectType<boolean>(RA.argsPass(combiningPredicate)([Boolean, Boolean])(1, 2));
expectType<boolean>(RA.argsPass(combiningPredicate, [Boolean, Boolean])('a', 'b'));
expectType<boolean>(RA.argsPass(combiningPredicate)([Boolean, Boolean])('a', 'b'));
expectType<boolean>(RA.argsPass(combiningPredicate, [Boolean, Boolean])('a', 2));
expectType<boolean>(RA.argsPass(combiningPredicate)([Boolean, Boolean])('a', 2));
expectType<boolean>(RA.argsPass(combiningPredicate, [Boolean, Boolean])());

expectType<boolean>(RA.argsPass(combiningPredicate)([Boolean, Boolean])());

expectError(RA.argsPass(nonCurriedCombiningPredicate, [Boolean, Boolean])(1, 2));

expectError(RA.argsPass(combiningPredicate, [nonBoolPredicate])(1, 2));
