import { assert } from 'chai';

import * as RA from '../src/index.js';
import { padEndInvoker, padEndPonyfill } from '../src/padCharsEnd.js';

describe('padCharsEnd', function () {
  specify('should pad string with given padString', function () {
    assert.strictEqual(RA.padCharsEnd('-', 3, 'a'), 'a--');
  });

  context('given targetLength as 0', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsEnd('$', 0, 'abc'), 'abc');
    });
  });

  context('given targetLength less than string length', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsEnd('$', 1, 'abc'), 'abc');
    });
  });

  context(
    'given targetLength less than equal to padString length',
    function () {
      specify('should trim padString', function () {
        assert.strictEqual(RA.padCharsEnd('123456', 6, 'abc'), 'abc123');
        assert.strictEqual(RA.padCharsEnd('123456', 5, 'abc'), 'abc12');
      });
    }
  );

  context('given targetLength supplied as float', function () {
    specify('should convert targetLength to integer', function () {
      assert.strictEqual(RA.padCharsEnd('$', 7.5, 'abc'), 'abc$$$$');
    });
  });

  context(
    'given targetLength is a value coercible to valid integer number',
    function () {
      specify('should return padded string', function () {
        assert.strictEqual(RA.padCharsEnd('*', '5', 'abc'), 'abc**');
      });
    }
  );

  context('given targeLength is a negative number', function () {
    specify('should return original string', function () {
      assert.strictEqual(RA.padCharsEnd('$', -10, 'abc'), 'abc');
    });
  });

  context('given padString set to undefined', function () {
    specify('should return string padded with spaces', function () {
      assert.strictEqual(RA.padCharsEnd(undefined, 5, '200'), '200  ');
    });
  });

  context('given null padString', function () {
    specify('should convert null to string type', function () {
      assert.strictEqual(RA.padCharsEnd(null, 5, 'abc'), 'abcnu');
    });
  });

  specify('should be curried', function () {
    assert.strictEqual(RA.padCharsEnd('*', 5, 'abc'), 'abc**');
    assert.strictEqual(RA.padCharsEnd('*', 5)('abc'), 'abc**');
    assert.strictEqual(RA.padCharsEnd('*')(5, 'abc'), 'abc**');
    assert.strictEqual(RA.padCharsEnd('*')(5)('abc'), 'abc**');
  });

  context('padEndInvoker', function () {
    before(function () {
      if (RA.isNotFunction(String.prototype.padEnd)) {
        this.skip();
      }
    });

    specify('should pad string with given padString', function () {
      assert.strictEqual(padEndInvoker('-', 3, 'a'), 'a--');
    });

    context('given targetLength as 0', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndInvoker('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndInvoker('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function () {
        specify('should trim padString', function () {
          assert.strictEqual(padEndInvoker('123456', 6, 'abc'), 'abc123');
          assert.strictEqual(padEndInvoker('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function () {
      specify('should convert targetLength to integer', function () {
        assert.strictEqual(padEndInvoker('$', 7.5, 'abc'), 'abc$$$$');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function () {
        specify('should return padded string', function () {
          assert.strictEqual(padEndInvoker('*', '5', 'abc'), 'abc**');
        });
      }
    );

    context('given targeLength is a negative number', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndInvoker('$', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function () {
      specify('should return string padded with spaces', function () {
        assert.strictEqual(padEndInvoker(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function () {
      specify('should convert null to string type', function () {
        assert.strictEqual(padEndInvoker(null, 5, 'abc'), 'abcnu');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(padEndInvoker('*', 5, 'abc'), 'abc**');
      assert.strictEqual(padEndInvoker('*', 5)('abc'), 'abc**');
      assert.strictEqual(padEndInvoker('*')(5, 'abc'), 'abc**');
      assert.strictEqual(padEndInvoker('*')(5)('abc'), 'abc**');
    });
  });

  context('padEndPonyfill', function () {
    specify('should pad string with given padString', function () {
      assert.strictEqual(padEndPonyfill('-', 3, 'a'), 'a--');
    });

    context('given targetLength as 0', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndPonyfill('$', 0, 'abc'), 'abc');
      });
    });

    context('given targetLength less than string length', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndPonyfill('$', 1, 'abc'), 'abc');
      });
    });

    context(
      'given targetLength less than equal to padString length',
      function () {
        specify('should trim padString', function () {
          assert.strictEqual(padEndPonyfill('123456', 6, 'abc'), 'abc123');
          assert.strictEqual(padEndPonyfill('123456', 5, 'abc'), 'abc12');
        });
      }
    );

    context('given targetLength supplied as float', function () {
      specify('should convert targetLength to integer', function () {
        assert.strictEqual(padEndPonyfill('$', 7.5, 'abc'), 'abc$$$$');
      });
    });

    context(
      'given targetLength is a value coercible to valid integer number',
      function () {
        specify('should return padded string', function () {
          assert.strictEqual(padEndPonyfill('*', '5', 'abc'), 'abc**');
        });
      }
    );

    context('given targeLength is a negative number', function () {
      specify('should return original string', function () {
        assert.strictEqual(padEndPonyfill('$', -10, 'abc'), 'abc');
      });
    });

    context('given padString set to undefined', function () {
      specify('should return string padded with spaces', function () {
        assert.strictEqual(padEndPonyfill(undefined, 5, '200'), '200  ');
      });
    });

    context('given null padString', function () {
      specify('should convert null to string type', function () {
        assert.strictEqual(padEndPonyfill(null, 5, 'abc'), 'abcnu');
      });
    });

    specify('should be curried', function () {
      assert.strictEqual(padEndPonyfill('*', 5, 'abc'), 'abc**');
      assert.strictEqual(padEndPonyfill('*', 5)('abc'), 'abc**');
      assert.strictEqual(padEndPonyfill('*')(5, 'abc'), 'abc**');
      assert.strictEqual(padEndPonyfill('*')(5)('abc'), 'abc**');
    });
  });
});
