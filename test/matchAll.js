import { assert } from 'chai';
import { __ } from 'ramda';

import * as RA from '../src';
import { matchAllPonyfill, matchAllInvoker } from '../src/matchAll';
import matchResult from './shared/matchResult';

describe('matchAll', function () {
  it('should find all matches', function () {
    const input = 'ab cd ab cd ab cd';
    const actual = RA.matchAll('ab', input);
    // create an array of arrays with "match" props (input, groups, index)
    const expected = [0, 6, 12].map(matchResult(['ab'], input, __, undefined));
    assert.deepEqual(actual, expected);
  });

  context('given empty string', function () {
    specify('should return an empty array', function () {
      assert.deepEqual(RA.matchAll('ab', ''), []);
    });
  });

  context('given empty searchValue', function () {
    specify('should return an occurence for each char boundary', function () {
      const input = 'ab';
      const expected = [0, 1, 2].map(matchResult([''], input, __, undefined));
      assert.deepEqual(RA.matchAll('', input), expected);
    });
  });

  context('given a regexp that involves several match in a group', function () {
    specify('should return an occurence of each match', function () {
      const input = 'test1test2';
      const search = /t(e)(st(\d?))/g;
      assert.deepEqual(RA.matchAll(search, input), [
        matchResult(['test1', 'e', 'st1', '1'], input, 0, undefined),
        matchResult(['test2', 'e', 'st2', '2'], input, 5, undefined),
      ]);
    });
  });

  context('given a regexp that involves named grouping', function () {
    specify('should return an occurence of named group', function () {
      const input = '2012-10-17';
      const search = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
      assert.deepEqual(RA.matchAll(search, input), [
        matchResult(['2012-10-17', '2012', '10', '17'], input, 0, {
          year: '2012',
          month: '10',
          day: '17',
        }),
      ]);
    });
  });

  it('should be curried', function () {
    const input = 'aba';
    const expected = [
      matchResult(['a'], input, 0, undefined),
      matchResult(['a'], input, 2, undefined),
    ];
    assert.deepEqual(RA.matchAll('a', input), expected);
    assert.deepEqual(RA.matchAll('a')(input), expected);
  });

  context('matchAllInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.matchAll)) {
        this.skip();
      }
    });

    specify('should support global RegExp searchValue', function () {
      const input = 'xxx';
      const actual = matchAllInvoker(/x/g, input);
      const expected = [0, 1, 2].map(matchResult(['x'], input, __, undefined));

      assert.deepEqual(actual, expected);
    });

    specify('should support empty searchValue', function () {
      const input = 'xxx';
      const actual = matchAllInvoker('', input);
      const expected = [0, 1, 2, 3].map(
        matchResult([''], input, __, undefined)
      );

      assert.deepEqual(actual, expected);
    });

    specify('should find all matches', function () {
      const input = 'ab cd ab cd ab cd';
      const actual = matchAllInvoker('ab', input);
      const expected = [0, 6, 12].map((index) =>
        matchResult(['ab'], input, index, undefined)
      );

      assert.deepEqual(actual, expected);
    });

    context('given empty string', function () {
      specify('should return an empty array', function () {
        assert.deepEqual(matchAllInvoker('a', ''), []);
      });
    });

    context(
      'given a regexp that involves several match in a group',
      function () {
        specify('should return an occurence of each match', function () {
          const input = 'test1test2';
          const search = /t(e)(st(\d?))/g;
          assert.deepEqual(matchAllInvoker(search, input), [
            matchResult(['test1', 'e', 'st1', '1'], input, 0, undefined),
            matchResult(['test2', 'e', 'st2', '2'], input, 5, undefined),
          ]);
        });
      }
    );

    context('given a regexp that involves named grouping', function () {
      specify('should return an occurence of named group', function () {
        const input = '2012-10-17';
        const search = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
        assert.deepEqual(matchAllInvoker(search, input), [
          matchResult(['2012-10-17', '2012', '10', '17'], input, 0, {
            year: '2012',
            month: '10',
            day: '17',
          }),
        ]);
      });
    });

    specify('should be curried', function () {
      const input = 'aba';
      const expected = [
        matchResult(['a'], input, 0, undefined),
        matchResult(['a'], input, 2, undefined),
      ];
      assert.deepEqual(matchAllInvoker('a', input), expected);
      assert.deepEqual(matchAllInvoker('a')(input), expected);
    });
  });

  context('matchAllPonyfill', function () {
    context('given searchValue is a non-global RegExp', function () {
      // warning: EcmaScript official documentation
      // says that matchAll non global regex should throw an error
      // (@see 21.1.3.12 in https://tc39.es/ecma262/#sec-string.prototype.matchall)
      // main browsers implements that behavior
      // but node.js 12+ doesn't
      // that's why this test is only written for the polyfill
      specify('should throw Error', function () {
        assert.throws(() => matchAllPonyfill(/a/, 'abc'), TypeError);
      });
    });

    specify('should support global RegExp searchValue', function () {
      const input = 'xxx';
      const actual = matchAllPonyfill(/x/g, input);
      const expected = [0, 1, 2].map(matchResult(['x'], input, __, undefined));

      assert.deepEqual(actual, expected);
    });

    specify('should support empty searchValue', function () {
      const input = 'xxx';
      const actual = matchAllPonyfill('', input);
      const expected = [0, 1, 2, 3].map((index) =>
        matchResult([''], input, index, undefined)
      );
      assert.deepEqual(actual, expected);
    });

    specify('should find all matches', function () {
      const input = 'ab cd ab cd ab cd';
      const actual = matchAllPonyfill('ab', input);
      const expected = [0, 6, 12].map((index) =>
        matchResult(['ab'], input, index, undefined)
      );

      assert.deepEqual(actual, expected);
    });

    context('given empty string', function () {
      specify('should return an empty array', function () {
        assert.deepEqual(matchAllPonyfill('a', ''), []);
      });
    });

    context(
      'given a regexp that involves several match in a group',
      function () {
        specify('should return an occurence of each match', function () {
          const input = 'test1test2';
          const search = /t(e)(st(\d?))/g;
          assert.deepEqual(matchAllPonyfill(search, input), [
            matchResult(['test1', 'e', 'st1', '1'], input, 0, undefined),
            matchResult(['test2', 'e', 'st2', '2'], input, 5, undefined),
          ]);
        });
      }
    );

    context('given a regexp that involves named grouping', function () {
      specify('should return an occurence of named group', function () {
        const input = '2012-10-17';
        const search = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
        assert.deepEqual(matchAllPonyfill(search, input), [
          matchResult(['2012-10-17', '2012', '10', '17'], input, 0, {
            year: '2012',
            month: '10',
            day: '17',
          }),
        ]);
      });
    });

    specify('should be curried', function () {
      const input = 'aba';
      const expected = [
        matchResult(['a'], input, 0, undefined),
        matchResult(['a'], input, 2, undefined),
      ];
      assert.deepEqual(matchAllPonyfill('a', input), expected);
      assert.deepEqual(matchAllPonyfill('a')(input), expected);
    });
  });
});
