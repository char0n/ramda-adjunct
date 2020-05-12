import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';
import MAX_SAFE_INTEGER from '../src/internal/polyfills/Number.MAX_SAFE_INTEGER';
import MIN_SAFE_INTEGER from '../src/internal/polyfills/Number.MIN_SAFE_INTEGER';
import args from './shared/arguments';
import Symbol from './shared/Symbol';

describe('isNaturalNumber', function () {
    it('should test value for a natural number `Number`', function() {
        assert.isTrue(RA.isNaturalNumber(1));
        assert.isTrue(RA.isNaturalNumber(10));
        assert.isTrue(RA.isNaturalNumber(0));

        assert.isFalse(RA.isNaturalNumber(-1));
        assert.isFalse(RA.isNaturalNumber(-101));

        assert.isTrue(RA.isNaturalNumber(MAX_SAFE_INTEGER));
        assert.isFalse(RA.isNaturalNumber(MIN_SAFE_INTEGER));

        assert.isFalse(RA.isNaturalNumber(new Date()));      
        assert.isFalse(RA.isNaturalNumber(Object(0)));
        assert.isFalse(RA.isNaturalNumber(Object(0.1)));
        assert.isFalse(RA.isNaturalNumber(Object(false)));
        assert.isFalse(RA.isNaturalNumber(Object('f')));
        assert.isFalse(RA.isNaturalNumber([1, 2, 3, 5]));
        assert.isFalse(RA.isNaturalNumber(new Error()));
        assert.isFalse(RA.isNaturalNumber(Array.prototype.slice));
        assert.isFalse(RA.isNaturalNumber({ b : 3 }));
        assert.isFalse(RA.isNaturalNumber(args));
        assert.isFalse(RA.isNaturalNumber(/x/));
        assert.isFalse(RA.isNaturalNumber('5'));
        assert.isFalse(RA.isNaturalNumber(NaN));
        assert.isFalse(RA.isNaturalNumber(Infinity));
        assert.isFalse(RA.isNaturalNumber(-Infinity));
        assert.isFalse(RA.isNaturalNumber(true));

        if (Symbol !== 'undefined') {
            assert.isFalse(RA.isNaturalNumber(Symbol));
        }

        assert.isFalse(RA.isNaturalNumber(null));
        assert.isFalse(RA.isNaturalNumber(undefined));
    });

    context('given a natural number that looks like a float number', function() {
        specify('should treat the number as a natural number', function() {
            assert.isTrue(RA.isNaturalNumber(1.0));
        })
    });

    it('should support placeholder to specify "gaps"', function() {
        const isNaturalNumber = RA.isNaturalNumber(R.__);

        assert.isTrue(isNaturalNumber(1));
    })
});
