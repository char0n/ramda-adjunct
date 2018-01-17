import { assert } from 'chai';

import * as RA from '../src/index';


describe('allP', function () {
  context('when no arguments', function () {
    specify('throws TypeError', function (done) {
      assert.isRejected(RA.allP(), Error).notify(done);
    });
  });

  it('tests resolving list of thenable values', function (done) {
    const p1 = RA.resolveP(1);
    const p2 = RA.resolveP(2);

    assert.eventually.deepEqual(RA.allP([p1, p2]), [1, 2]).notify(done);
  });

  it('tests resolving list of mixed thenable and non-thenable values', function (done) {
    const p1 = RA.resolveP(1);
    const p2 = 2;

    assert.eventually.deepEqual(RA.allP([p1, p2]), [1, 2]).notify(done);
  });

  it('tests resolving list of rejected thenable values', function (done) {
    const p1 = RA.resolveP(1);
    const p2 = RA.rejectP(2);

    assert.isRejected(RA.allP([p1, p2]), 2).notify(done);
  });

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all#Promise.all_fail-fast_behaviour
  it('tests fail-fast behavior', function (done) {
    const p1 = new Promise((resolve) => {
      setTimeout(resolve, 10, 'one');
    });
    const p2 = new Promise((resolve) => {
      setTimeout(resolve, 20, 'two');
    });
    const p3 = new Promise((resolve) => {
      setTimeout(resolve, 30, 'three');
    });
    const p4 = new Promise((resolve) => {
      setTimeout(resolve, 40, 'four');
    });
    const p5 = new Promise((resolve, reject) => {
      reject(new Error());
    });

    assert.isRejected(RA.allP([p1, p2, p3, p4, p5]), Error).notify(done);
  });

  context('when there are two rejections', function () {
    specify('should reject with the first one', function (done) {
      const p1 = RA.resolveP(1);
      const p2 = RA.rejectP(1);
      const p3 = RA.rejectP(2);

      assert.isRejected(RA.allP([p1, p2, p3]), 1).notify(done);
    });
  });
});
