import { curryN, bind } from 'ramda';

/**
 * Composable shortcut for `Promise.race`.
 *
 * The `raceP` function receives a list (or an iterable) of Promises (or other non-pending
 * values), and returns a single Promise, which is resolved/rejected with the first resolved or
 * rejected value from the input.
 *
 * @func raceP
 * @category List
 * @sig[Promise a] - > Promise[a]
 * @param {Iterable.<*>} iterable An iterable object such as an Array or String
 * @return {Promise} A pending Promise. This returned promise is then settled
 * asynchronously (as soon as the stack is empty) with the first non-pending value in the input
 * (in case there is at least one), or with the value rejected/resolved by the first settled
 * promise of the input.
 * @see {@link RA.resolveP|resolveP}, {@link RA.rejectP|rejectP}, {@link RA.allP|allP}
 * @example
 *
 * const promises = [1, 2, Promise.resolve(3)];
 * RA.raceP(promises); // Promise(1)
 *
 * const promises2 = [
 *  new Promise((_, rej) => rej('hello')),
 *  new Promise(res => setTimeout(() => res('bye'), 3000))
 * ];
 * RA.raceP(promises2); // Promise('hello')
 *
 * const promises3 = [
 *  Promise.resolve(1),
 *  new Promise(res => setTimeout(() => res(2), 1000))
 * ];
 * RA.raceP(promises3); // Promise(1)
 */
const raceP = curryN(1, bind(Promise.race, Promise));

export default raceP;
