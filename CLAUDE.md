# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ramda Adjunct is a companion library to Ramda, providing additional functional utilities not present in the core Ramda library. It offers 180+ utility functions organized by category (Type, Function, List, Object, Relation, Logic, Math, String).

## Common Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run a single test file
npx mocha test/<filename>.js

# Run linter (ESLint with Airbnb style + Prettier)
npm run lint

# Fix lint issues
npm run lint:fix

# Build all formats (ES modules, CommonJS, UMD)
npm run build

# Build specific formats
npm run build:es        # ES5 with ES2015 imports -> es/
npm run build:commonjs  # ES5 with CommonJS imports -> lib/
npm run build:umd       # UMD bundles -> dist/

# Run code coverage
npm run coverage

# Generate documentation
npm run docs

# Run TypeScript type tests
npm run test:types

# Test against supported Ramda versions
npm run test:ramda
```

## Architecture

### Source Structure
- `src/` - Source files, one function per file (ES modules with `.js` extension)
- `src/index.js` - Main export file that re-exports all utilities
- `src/internal/` - Internal helper functions not exported publicly
- `src/fantasy-land/` - Fantasy Land specification implementations

### Build Outputs
- `es/` - ES5 code with ES2015 imports (for bundlers with tree-shaking)
- `lib/` - ES5 code with CommonJS imports (for Node.js require)
- `dist/` - UMD bundles for browsers

### Tests
- `test/` - Test files using Mocha + Chai, mirroring src structure
- `test/shared/` - Shared test utilities
- Tests bootstrap via `test/mocha-bootstrap.js`

### Types
- `types/index.d.ts` - TypeScript type definitions
- `types/test/` - TypeScript type tests

## Coding Patterns

### Function Pattern
Every utility function follows this pattern:
1. Uses Ramda's `curryN` to ensure consistent curried behavior
2. Includes comprehensive JSDoc with `@func`, `@memberOf RA`, `@since`, `@category`, `@sig`, `@param`, `@return`, `@see`, and `@example`
3. Exports as default from its own file
4. Is re-exported from `src/index.js`

### Test Pattern
Tests use Mocha + Chai's assert style:
```javascript
import { assert } from 'chai';
import * as R from 'ramda';
import * as RA from '../src/index.js';

describe('functionName', function () {
  it('should ...', function () {
    assert.isTrue(RA.functionName(...));
  });

  it('should support placeholder to specify "gaps"', function () {
    const fn = RA.functionName(R.__);
    assert.isTrue(fn(...));
  });
});
```

### Import Style
- Always use `.js` extension in imports: `import x from './file.js'`
- Ramda functions are imported individually: `import { curryN, pipe } from 'ramda'`

## Commit Messages

Follow conventional commits format: `<type>(<scope>): <subject>`

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore

Example: `feat(isArray): add new type checking utility`
