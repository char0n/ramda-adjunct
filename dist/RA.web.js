(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("R"));
	else if(typeof define === 'function' && define.amd)
		define(["R"], factory);
	else if(typeof exports === 'object')
		exports["RA"] = factory(require("R"));
	else
		root["RA"] = factory(root["R"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-len */
/**
 * Checks if input value is `Async Function`
 *
 * @func isAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isNotAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isAsyncFunction(async function test() { }); //=> true
 * RA.isAsyncFunction(null); //=> false
 * RA.isAsyncFunction(function test() { }); //=> false
 * RA.isAsyncFunction(() => {}); //=> false
 */
/* eslint-enable max-len */

module.exports = function (val) {
  return Object.prototype.toString.call(val) === '[object AsyncFunction]';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    or = _require.or;

var isNotNull = __webpack_require__(5);

var GeneratorFunction = null;
try {
  GeneratorFunction = new Function('return function* () {}')().constructor; // eslint-disable-line no-new-func
} catch (e) {} // eslint-disable-line no-empty


/* eslint-disable max-len */
/**
 * Checks if input value is `Generator Function`
 *
 * @func isGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isNotGeneratorFunction|isNotGeneratorFunction}
 * @example
 *
 * RA.isGeneratorFunction(function* test() { }); //=> true
 * RA.isGeneratorFunction(null); //=> false
 * RA.isGeneratorFunction(function test() { }); //=> false
 * RA.isGeneratorFunction(() => {}); //=> false
 */
/* eslint-enable max-len */

module.exports = function (val) {
  var toStringCheck = Object.prototype.toString.call(val) === '[object AsyncFunction]';
  var legacyConstructorCheck = isNotNull(GeneratorFunction) && val instanceof GeneratorFunction;

  return or(toStringCheck, legacyConstructorCheck);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(20);

/**
 * Checks if input value is `Array`
 *
 * @func isArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotArray|isNotArray}
 * @example
 *
 * RA.isArray([]); //=> true
 * RA.isArray(null); //=> false
 * RA.isArray({}); //=> false
 */

module.exports = isArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    is = _require.is;

/**
 * Checks if input value is `Boolean`
 *
 * @func isBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotBoolean|isNotBoolean}
 * @example
 *
 * RA.isBoolean(false); //=> true
 * RA.isBoolean(true); //=> true
 * RA.isBoolean(null); //=> false
 */

module.exports = is(Boolean);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isNull = __webpack_require__(6);

/**
 * Checks if input value is complement of `null`
 *
 * @func isNotNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNull|isNull}
 * @example
 *
 * RA.isNotNull(1); //=> true
 * RA.isNotNull(undefined); //=> true
 * RA.isNotNull(null); //=> false
 */

module.exports = complement(isNull);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    equals = _require.equals;

/**
 * Checks if input value is `null`
 *
 * @func isNull
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.1.0|v0.1.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNull|isNotNull}
 * @example
 *
 * RA.isNull(1); //=> false
 * RA.isNull(undefined); //=> false
 * RA.isNull(null); //=> true
 */


module.exports = equals(null);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isString = __webpack_require__(22);

/**
 * Checks if input value is `String`
 *
 * @func isString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotString|isNotString}
 * @example
 *
 * RA.isString('abc'); //=> true
 * RA.isString(1); //=> false
 */

module.exports = isString;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    equals = _require.equals;

/**
 * Checks if input value is `undefined`
 *
 * @func isUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotUndefined|isNotUndefined}
 * @example
 *
 * RA.isUndefined(1); //=> false
 * RA.isUndefined(undefined); //=> true
 * RA.isUndefined(null); //=> false
 */


module.exports = equals(undefined);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    anyPass = _require.anyPass;

var isFunction = __webpack_require__(21);

var isGeneratorFunction = __webpack_require__(2);
var isAsyncFunction = __webpack_require__(1);

/* eslint-disable max-len */
/**
 * Checks if input value is `Function`
 *
 * @func isFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotFunction|isNotFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isFunction(function test() { }); //=> true
 * RA.isFunction(function* test() { }); //=> true
 * RA.isFunction(async function test() { }); //=> true
 * RA.isFunction(() => {}); //=> true
 * RA.isFunction(null); //=> false
 * RA.isFunction('abc'); //=> false
 */
/* eslint-enable max-len */

module.exports = anyPass([isFunction, isGeneratorFunction, isAsyncFunction]);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    anyPass = _require.anyPass,
    isEmpty = _require.isEmpty,
    isNil = _require.isNil;

/**
 * Returns `true` if the given value is its type's empty value, `null` or `undefined`
 *
 * @func isNilOrEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}, {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNilOrEmpty([1, 2, 3]); //=> false
 * RA.isNilOrEmpty([]); //=> true
 * RA.isNilOrEmpty(''); //=> true
 * RA.isNilOrEmpty(null); //=> true
 * RA.isNilOrEmpty(undefined): //=> true
 * RA.isNilOrEmpty({}); //=> true
 * RA.isNilOrEmpty({length: 0}); //=> false
 */

module.exports = anyPass([isNil, isEmpty]);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isArray = __webpack_require__(3);

/**
 * Checks if input value is complement of `Array`
 *
 * @func isNotArray
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isArray|isArray}
 * @example
 *
 * RA.isNotArray([]); //=> false
 * RA.isNotArray(null); //=> true
 * RA.isNotArray({}); //=> true
 */

module.exports = complement(isArray);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement,
    isArrayLike = _require.isArrayLike;

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func isNotArrayLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isArrayLike|isArrayLike}
 * @example
 *
 * RA.isNotArrayLike([]); //=> false
 * RA.isNotArrayLike(true); //=> true
 * RA.isNotArrayLike({}); //=> true
 * RA.isNotArrayLike({length: 10}); //=> true
 * RA.isNotArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> false
 */

module.exports = complement(isArrayLike);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isAsyncFunction = __webpack_require__(1);

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Async Function`
 *
 * @func isNotAsyncFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotAsyncFunction(async function test() { }); //=> false
 * RA.isNotAsyncFunction(null); //=> true
 * RA.isNotAsyncFunction(function test() { }); //=> true
 * RA.isNotAsyncFunction(() => {}); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isAsyncFunction);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isBoolean = __webpack_require__(4);

/**
 * Checks if input value is complement of `Boolean`
 *
 * @func isNotBoolean
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isBoolean|isBoolean}
 * @example
 *
 * RA.isNotBoolean(false); //=> false
 * RA.isNotBoolean(true); //=> false
 * RA.isNotBoolean(null); //=> true
 */

module.exports = complement(isBoolean);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement,
    isEmpty = _require.isEmpty;

/**
 * Returns true if the given value is not its type's empty value; `false` otherwise.
 *
 * @func isNotEmpty
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isEmpty|isEmpty}
 * @example
 *
 * RA.isNotEmpty([1, 2, 3]); //=> true
 * RA.isNotEmpty([]); //=> false
 * RA.isNotEmpty(''); //=> false
 * RA.isNotEmpty(null); //=> true
 * RA.isNotEmpty(undefined): //=> true
 * RA.isNotEmpty({}); //=> false
 * RA.isNotEmpty({length: 0}); //=> true
 */

module.exports = complement(isEmpty);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isGeneratorFunction = __webpack_require__(2);

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Generator Function`
 *
 * @func isNotGeneratorFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotGeneratorFunction(function* test() { }); //=> false
 * RA.isNotGeneratorFunction(null); //=> true
 * RA.isNotGeneratorFunction(function test() { }); //=> true
 * RA.isNotGeneratorFunction(() => {}); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isGeneratorFunction);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    isNil = _require.isNil,
    complement = _require.complement;

/**
 * Checks if input value is complement of `null` or `undefined`
 *
 * @func isNotNil
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.3.0|v0.3.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link http://ramdajs.com/docs/#isNil|isNil}
 * @example
 *
 * RA.isNotNil(null); //=> false
 * RA.isNotNil(undefined); //=> false
 * RA.isNotNil(0); //=> true
 * RA.isNotNil([]); //=> true
 */


module.exports = complement(isNil);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var iString = __webpack_require__(7);

/**
 * Checks if input value is complement of `String`
 *
 * @func isNotString
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.4.0|v0.4.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isString|isString}
 * @example
 *
 * RA.isNotString('abc'); //=> false
 * RA.isNotString(1); //=> true
 */

module.exports = complement(iString);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isUndefined = __webpack_require__(8);

/**
 * Checks if input value is complement `undefined`
 *
 * @func isNotUndefined
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.0.1|v0.0.1}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isUndefined|isUndefined}
 * @example
 *
 * RA.isNotUndefined(1); //=> true
 * RA.isNotUndefined(undefined); //=> false
 * RA.isNotUndefined(null); //=> true
 */
module.exports = complement(isUndefined);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNotUndefined = __webpack_require__(19);
var isUndefined = __webpack_require__(8);
var isNull = __webpack_require__(6);
var isNotNull = __webpack_require__(5);
var isNotNil = __webpack_require__(17);
var isArray = __webpack_require__(3);
var isNotArray = __webpack_require__(11);
var isBoolean = __webpack_require__(4);
var isNotBoolean = __webpack_require__(14);
var isNotEmpty = __webpack_require__(15);
var isNilOrEmpty = __webpack_require__(10);
var isString = __webpack_require__(7);
var isNotString = __webpack_require__(18);
var isNotArrayLike = __webpack_require__(12);
var isGeneratorFunction = __webpack_require__(2);
var isNotGeneratorFunction = __webpack_require__(16);
var isAsyncFunction = __webpack_require__(1);
var isNotAsyncFunction = __webpack_require__(13);
var isFunction = __webpack_require__(9);

/**
 * @namespace RA
 */
module.exports = {
  isNotUndefined: isNotUndefined,
  isUndefined: isUndefined,
  isNull: isNull,
  isNotNull: isNotNull,
  isNotNil: isNotNil,
  isArray: isArray,
  isNotArray: isNotArray,
  isBoolean: isBoolean,
  isNotBoolean: isNotBoolean,
  isNotEmpty: isNotEmpty,
  isNilOrEmpty: isNilOrEmpty,
  isString: isString,
  isNotString: isNotString,
  isNotArrayLike: isNotArrayLike,
  isGeneratorFunction: isGeneratorFunction,
  isNotGeneratorFunction: isNotGeneratorFunction,
  isAsyncFunction: isAsyncFunction,
  isNotAsyncFunction: isNotAsyncFunction,
  isFunction: isFunction
};

/***/ })
/******/ ]);
});