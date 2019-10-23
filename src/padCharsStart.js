import { flip, invoker, curry } from 'ramda';

import isFunction from './isFunction';
import polyfill from './internal/polyfills/String.padStart';

export const stringPadStartInvoker = flip(invoker(2, 'padStart'));
export const stringPadStartPolyfill = curry(polyfill);

const padCharsStart = isFunction(String.prototype.padStart)
  ? stringPadStartInvoker
  : stringPadStartPolyfill;

export default padCharsStart;
