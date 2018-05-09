import { has } from 'ramda';

import isArray from './isArray';
import isString from './isString';

/* eslint-disable max-len */
/**
 * Tests whether or not an object is similar to an array.
 *
 * @func isArrayLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/1.9.0|v1.9.0}
 * @licence https://github.com/ramda/ramda/blob/master/LICENSE.txt
 * @category List
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @returns {boolean} `true` if `val` has a numeric length property and extreme indices defined; `false` otherwise.
 * @see {@link RA.isNotArrayLike|isNotArrayLike}

 * @example
 *
 * RA.isArrayLike([]); //=> true
 * RA.isArrayLike(true); //=> false
 * RA.isArrayLike({}); //=> false
 * RA.isArrayLike({length: 10}); //=> false
 * RA.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
/* eslint-enable max-len */
const isArrayLike = val => {
  if (isArray(val)) {
    return true;
  }
  if (!val) {
    return false;
  }
  if (isString(val)) {
    return false;
  }
  if (typeof val !== 'object') {
    return false;
  }
  if (val.nodeType === 1) {
    return !!val.length;
  }
  if (val.length === 0) {
    return true;
  }
  if (val.length > 0) {
    return has(0, val) && has(val.length - 1, val);
  }
  return false;
};

export default isArrayLike;

/**
 The MIT License (MIT)

 Copyright (c) 2013-2016 Scott Sauyet and Michael Hurley

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
