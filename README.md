[![CircleCI](https://circleci.com/gh/char0n/ramda-adjunct.svg?style=svg)](https://circleci.com/gh/char0n/ramda-adjunct)
[![codecov](https://codecov.io/gh/char0n/ramda-adjunct/branch/master/graph/badge.svg)](https://codecov.io/gh/char0n/ramda-adjunct)
[![jsdoc](https://img.shields.io/badge/docs-100%25-green.svg)](https://char0n.github.io/ramda-adjunct/)
[![npm version](https://badge.fury.io/js/ramda-adjunct.svg)](https://www.npmjs.com/package/ramda-adjunct)
[![dependencies](https://david-dm.org/char0n/ramda-adjunct.svg)](https://david-dm.org/char0n/ramda-adjunct)
[![Join the chat at https://gitter.im/ramda-adjunct/Lobby](https://badges.gitter.im/ramda-adjunct/Lobby.svg)](https://gitter.im/ramda-adjunct/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Ramda Adjunct

This library is a community maintained extension of Ramda.

## Motivation

It seems to be very common for people to create their own utils and recipes composing
the Ramda functions and creating yet more complex aggregate functions. 
Ramda Adjunct tries to eliminate this repetitive wheel of reinvention
and centralize most aggregate utils in its codebase.

## Benefits

As a maintainers, we see three main benefits in Ramda Adjunct. 
 
### Centralization

All Ramda recipes and aggregate utils not present in Ramda are centralized here.
There is no more need for everybody to create their own utils in their own 
codebases.
 
### Tests

Creating custom aggregate utils or implementing recipes from Ramda wiki creates 
the defectiveness problem. The problem is caused by the absence of any tests.
Ramda Adjunct keeps 100% code coverage and mimics the Ramda test patterns.

### Impeccable documentation

You cannot call a library great without a great documentation. Ramda Adjnuct generates
its documentation directly from its codebase and uses patterns both found in Ramda and Lodash to document its API.

## Requirements

 - ramda >= 0.23.0
 - node >=6.9.5
 
It doesn't mean that Ramda Adjunct won't work on lower versions of node or ramda.
This just means that our tests run on these versions.

## Installation

```sh
 $ npm i ramda-adjunct
``` 

## API Documentation

 - [0.0.1](https://char0n.github.io/ramda-adjunct/0.0.1)
 - Latest: https://char0n.github.io/ramda-adjunct

## Development

If you want to contribute to this project, please consult the [CONTRIBUTING.MD](https://github.com/char0n/ramda-adjunct/blob/master/CONTRIBUTING.md) 
guideline.

**Obtaining project copy**

```sh
 $ git clone https://github.com/char0n/ramda-adjunct
 $ npm i 
```

**Running tests**
```sh
 $ npm run test
```

**Running linter**
```sh
 $ npm run lint
```

## Builds

```sh
 $ npm run dist
```

The command will create three types of builds.

`dist/RA.node.js` - ES5 compliant build, running on all node versions
`dist/RA.web.js` - ES5 compliant build, running in browsers. Requires `ramda.js` to be required before 
`dist/RA.web.standalone.js` - ES5 compliant build, running in browsers. It has `ramda.js` prebundled

## Author

 char0n (Vladimir Gorej)
 
 vladimir.gorej@gmail.com
 
 https://www.linkedin.com/in/vladimirgorej/
