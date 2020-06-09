import { assert } from 'chai';

import * as RA from '../src';
import { padStartInvoker, padStartPonyfill } from '../src/padCharsStart';

describe('padCharsStart', function () {
  specify('should pad string with given padString', function () {
    assert.strictEqual(RA.padCharsStart('-', 3, 'a'), '--a');
  });

  context('given targetLength as 0', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsStart('-', 0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsStart('-', 1, 'abc'), 'abc');
    });
  });

  context(
    'given targetLength less than equal to padString length',
    function () {
      specify('should trim padString', function () {
        assert.strictEqual(RA.padCharsStart('123456', 6, 'abc'), '123abc');
        assert.strictEqual(RA.padCharsStart('123456', 5, 'abc'), '12abc');
      });
    }
  );

  context('given targetLength supplied as float', function () {
    specify('should convert targetLength to integer', function () {
      assert.strictEqual(RA.padCharsStart('-', 7.5, 'abc'), '----abc');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function () {
      specify('should return padded string', function () {
        assert.strictEqual(RA.padCharsStart('-', '5', 'abc'), '--abc');
      });
    }
  );

  context('given targeLength is a negative number', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsStart('-', -10, 'abc'), 'abc');
    });
  });

  context('given padString set to undefined', function () {
    specify('should return string padded with spaces', function () {
      assert.strictEqual(RA.padCharsStart(undefined, 5, '200'), '  200');
    });
  });

  context('given null padString', function () {
    specify('should convert null to string type', function () {
      assert.strictEqual(RA.padCharsStart(null, 5, 'abc'), 'nuabc');
    });
  });

  specify('should be curried', function () {
    assert.strictEqual(RA.padCharsStart('-', 5, 'abc'), '--abc');
    assert.strictEqual(RA.padCharsStart('-', 5)('abc'), '--abc');
    assert.strictEqual(RA.padCharsStart('-')(5, 'abc'), '--abc');
    assert.strictEqual(RA.padCharsStart('-')(5)('abc'), '--abc');
  });

  context('padStartInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function () {
      assert.strictEqual(padStartInvoker('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartInvoker('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartInvoker('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function () {
        specify('should trim padString', function () {
          assert.strictEqual(padStartInvoker('123456', 6, 'abc'), '123abc');
          assert.strictEqual(padStartInvoker('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function () {
      specify('should convert targetLength to integer', function () {
        assert.strictEqual(padStartInvoker('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function () {
        specify('should return padded string', function () {
          assert.strictEqual(padStartInvoker('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartInvoker('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function () {
      specify('should return string padded with spaces', function () {
        assert.strictEqual(padStartInvoker(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function () {
      specify('should convert null to string type', function () {
        assert.strictEqual(padStartInvoker(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(padStartInvoker('-', 5, 'abc'), '--abc');
      assert.strictEqual(padStartInvoker('-', 5)('abc'), '--abc');
      assert.strictEqual(padStartInvoker('-')(5, 'abc'), '--abc');
      assert.strictEqual(padStartInvoker('-')(5)('abc'), '--abc');
    });
  });

  context('padStartPonyfill', function () {
    specify('should pad string with given padString', function () {
      assert.strictEqual(padStartPonyfill('-', 3, 'a'), '--a');
    });

    context('given targetLength as 0', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartPonyfill('-', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartPonyfill('-', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function () {
        specify('should trim padString', function () {
          assert.strictEqual(padStartPonyfill('123456', 6, 'abc'), '123abc');
          assert.strictEqual(padStartPonyfill('123456', 5, 'abc'), '12abc');
        });
      }
    );

    context('given targetLength supplied as float', function () {
      specify('should convert targetLength to integer', function () {
        assert.strictEqual(padStartPonyfill('-', 7.5, 'abc'), '----abc');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function () {
        specify('should return padded string', function () {
          assert.strictEqual(padStartPonyfill('-', '5', 'abc'), '--abc');
        });
      }
    );

    context('given targeLength is a negative number', function () {
      specify('should return original string', function () {
        assert.strictEqual(padStartPonyfill('-', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function () {
      specify('should return string padded with spaces', function () {
        assert.strictEqual(padStartPonyfill(undefined, 5, '200'), '  200');
      });
    });

    context('given null padString', function () {
      specify('should convert null to string type', function () {
        assert.strictEqual(padStartPonyfill(null, 5, 'abc'), 'nuabc');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(padStartPonyfill('-', 5, 'abc'), '--abc');
      assert.strictEqual(padStartPonyfill('-', 5)('abc'), '--abc');
      assert.strictEqual(padStartPonyfill('-')(5, 'abc'), '--abc');
      assert.strictEqual(padStartPonyfill('-')(5)('abc'), '--abc');
    });
  });
});
