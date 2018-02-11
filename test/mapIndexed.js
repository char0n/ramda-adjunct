import chai from 'chai';
import * as R from 'ramda';

import * as RA from '../src/index';
import eq from './shared/eq';


describe('mapIndexed', function () {
  context('R.map', function () {
    const listXf = {
      '@@transducer/init': () => [],
      '@@transducer/step': (acc, x) => acc.concat([x]),
      '@@transducer/result': x => x,
    };
    const times2 = x => x * 2;
    const add1 = x => x + 1;
    const dec = x => x - 1;
    const intoArray = R.into([]);

    it('maps simple functions over arrays', function () {
      eq(RA.mapIndexed(times2, [1, 2, 3, 4]), [2, 4, 6, 8]);
    });

    it('maps simple functions into arrays', function () {
      eq(intoArray(RA.mapIndexed(times2), [1, 2, 3, 4]), [2, 4, 6, 8]);
    });

    it('maps over objects', function () {
      eq(RA.mapIndexed(dec, {}), {});
      eq(RA.mapIndexed(dec, { x: 4, y: 5, z: 6 }), { x: 3, y: 4, z: 5 });
    });

    it('interprets ((->) r) as a functor', function () {
      const f = a => a - 1;
      const g = b => b * 2;
      const h = RA.mapIndexed(f, g);

      eq(h(10), (10 * 2) - 1);
    });

    it('dispatches to objects that implement `map`', function () {
      const obj = { x: 100, map: function fn(f) { return f(this.x) } };

      eq(RA.mapIndexed(add1, obj), 101);
    });

    it('dispatches to transformer objects', function () {
      const result = RA.mapIndexed(add1, listXf);

      eq(result.xf, listXf);
      eq(result.f(41), 42);
    });

    it('throws a TypeError on null and undefined', function () {
      chai.assert.throws(function fn() { return RA.mapIndexed(times2, null) }, TypeError);
      chai.assert.throws(function fn() { return RA.mapIndexed(times2, undefined) }, TypeError);
    });

    it('composes', function () {
      const mdouble = RA.mapIndexed(times2);
      const mdec = RA.mapIndexed(dec);

      eq(mdec(mdouble([10, 20, 30])), [19, 39, 59]);
    });

    it('can compose transducer-style', function () {
      const mdouble = RA.mapIndexed(times2);
      const mdec = RA.mapIndexed(dec);
      const xcomp = mdec(mdouble(listXf));

      eq(xcomp.xf.xf, listXf);
      eq(xcomp.xf.f(21), 42);
      eq(xcomp.f(43), 42);
      // eq(xcomp.xf, { xf: listXf, f: times2 });
      // eq(xcomp.f, dec);
    });

    it('correctly uses fantasy-land implementations', function () {
      const m1 = RA.Identity.of(1);
      const m2 = RA.mapIndexed(R.add(1), m1);

      eq(m1.value + 1, m2.value);
    });
  });

  context('documentation example', function () {
    specify('should join idx and value with a "-"', function () {
      const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];
      const resultList = ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r'];

      eq(RA.mapIndexed((val, idx) => `${idx}-${val}`, initialList), resultList);
    });
  });

  context('third argument', function () {
    const initialList = ['f', 'o', 'o', 'b', 'a', 'r'];
    specify('should be the same reference that original list', function () {
      RA.mapIndexed((val, idx, list) => {
        chai.assert.strictEqual(list, initialList);
        return val;
      }, initialList);
    });
  });
});
