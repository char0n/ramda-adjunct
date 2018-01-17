import * as RA from '../src/index';
import eq from './shared/eq';


describe('isArrayLike', function () {
  it('is true for Arrays', function () {
    eq(RA.isArrayLike([]), true);
    eq(RA.isArrayLike([1, 2, 3, 4]), true);
    eq(RA.isArrayLike([null]), true);
  });

  it('is true for arguments', function () {
    function test() {
      return RA.isArrayLike(arguments);
    }
    eq(test(), true);
    eq(test(1, 2, 3), true);
    eq(test(null), true);
  });

  it('is false for Strings', function () {
    eq(RA.isArrayLike(''), false);
    eq(RA.isArrayLike('abcdefg'), false);
  });

  it('is true for arbitrary objects with numeric length, if extreme indices are defined', function () {
    const obj1 = { length: 0 };
    const obj2 = { 0: 'something', length: 0 };
    const obj3 = { 0: void 0, length: 0 };
    const obj4 = { 0: 'zero', 1: 'one', length: 2 };
    const obj5 = { nodeType: 1, length: 2 };
    const obj6 = { 0: 'zero', length: 2 };
    const obj7 = { 1: 'one', length: 2 };

    eq(RA.isArrayLike(obj1), true);
    eq(RA.isArrayLike(obj2), true);
    eq(RA.isArrayLike(obj3), true);
    eq(RA.isArrayLike(obj4), true);
    eq(RA.isArrayLike(obj5), true);
    eq(RA.isArrayLike(obj6), false);
    eq(RA.isArrayLike(obj7), false);
  });

  it('is false for everything else', function () {
    eq(RA.isArrayLike(undefined), false);
    eq(RA.isArrayLike(1), false);
    eq(RA.isArrayLike({}), false);
    eq(RA.isArrayLike(false), false);
    eq(RA.isArrayLike(function () {}), false);
  });
});

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
