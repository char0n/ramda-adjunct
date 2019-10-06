import * as RA from '../src';
import eq from './shared/eq';

const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));

describe('noneP', function() {
  context('given all promises reject', function() {
    specify('should resolve with the reasons', async function() {
      const reasons = await RA.noneP([
        RA.rejectP(1),
        RA.rejectP('b'),
        RA.rejectP(),
      ]);
      eq(reasons, [1, 'b', undefined]);
    });
  });

  context('given one promise resolves', function() {
    specify('should reject with the fulfillment value', async function() {
      const value = await RA.noneP([
        RA.rejectP(),
        RA.rejectP(),
        RA.resolveP('oops'),
      ]).catch(RA.resolveP);
      eq(value, 'oops');
    });
  });

  context('given multiple promises resolve', function() {
    specify(
      'should reject with the fulfillment value of the first resolved promise',
      async function() {
        const value = await RA.noneP([
          RA.rejectP(),
          wait(500).then(() => RA.resolveP('slow')),
          wait(10).then(() => RA.resolveP('fast')),
        ]).catch(RA.resolveP);
        eq(value, 'fast');
      }
    );
  });

  context('given all promises resolve', function() {
    specify(
      'should reject with the fulfillment value of the first resolved promise',
      async function() {
        const value = await RA.noneP([
          RA.resolveP(1),
          RA.resolveP(2),
          RA.resolveP(3),
        ]).catch(RA.resolveP);
        eq(value, 1);
      }
    );
  });

  context('given a value that is not a promise', function() {
    specify('should reject with the non-promise value', async function() {
      const value = await RA.noneP([RA.rejectP(1), 2, RA.rejectP(3)]).catch(
        RA.resolveP
      );
      eq(value, 2);
    });
  });

  context('given an empty list', function() {
    specify('should resolve with empty reasons', async function() {
      const value = await RA.noneP([]).catch(RA.resolveP);
      eq(value, []);
    });
  });
});
