import { assert } from 'chai';
import * as R from 'ramda';

import * as RA from '../src';

describe('unzipObjWith', function() {
  it('unzips an object into key/value arrays applying a value/key transform', function() {
    const obj = {
      'abbrev@1': {
        version: '1.0.9',
        resolved:
          'https://registry.yarnpkg.com/abbrev/-/abbrev-1.0.9.tgz#91b4792588a7738c25f35dd6f63752a2f8776135',
      },
      'shell-quote@git+https://github.com/srghma/node-shell-quote.git#without_unlicenced_jsonify': {
        version: '1.6.0',
        resolved:
          'git+https://github.com/srghma/node-shell-quote.git#0aa381896e0cd7409ead15fd444f225807a61e0a',
      },
      '@graphile/plugin-supporter@git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git': {
        version: '1.6.0',
        resolved:
          'git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git#1234commit',
      },
    };
    const fn = (value, key) => [key, { ...value, name: key }];

    const actual = RA.unzipObjWith(fn, obj);

    const expected = [
      [
        'abbrev@1',
        'shell-quote@git+https://github.com/srghma/node-shell-quote.git#without_unlicenced_jsonify',
        '@graphile/plugin-supporter@git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git',
      ],
      [
        {
          name: 'abbrev@1',
          version: '1.0.9',
          resolved:
            'https://registry.yarnpkg.com/abbrev/-/abbrev-1.0.9.tgz#91b4792588a7738c25f35dd6f63752a2f8776135',
        },
        {
          name:
            'shell-quote@git+https://github.com/srghma/node-shell-quote.git#without_unlicenced_jsonify',
          version: '1.6.0',
          resolved:
            'git+https://github.com/srghma/node-shell-quote.git#0aa381896e0cd7409ead15fd444f225807a61e0a',
        },
        {
          name:
            '@graphile/plugin-supporter@git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git',
          version: '1.6.0',
          resolved:
            'git+https://1234user:1234pass@git.graphile.com/git/users/1234user/postgraphile-supporter.git#1234commit',
        },
      ],
    ];

    assert.deepEqual(actual, expected);
  });

  it('supports gap placeholders and currying', function() {
    const obj = { a: 1, b: 2, c: 3 };
    const partial = RA.unzipObjWith(R.__, obj);
    const fn = (v, k) => [`new${k.toUpperCase()}`, 2 * v];
    const actual = partial(fn);
    const expected = [['newA', 'newB', 'newC'], [2, 4, 6]];
    assert.deepEqual(actual, expected);
  });
});
