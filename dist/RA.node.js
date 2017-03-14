(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["ramda"], factory);
	else if(typeof exports === 'object')
		exports["RA"] = factory(require("ramda"));
	else
		root["RA"] = factory(root["ramda"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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


var _require = __webpack_require__(0),
    anyPass = _require.anyPass;

var _isFunction = __webpack_require__(34);

var isGeneratorFunction = __webpack_require__(4);
var isAsyncFunction = __webpack_require__(3);

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

module.exports = anyPass([_isFunction, isGeneratorFunction, isAsyncFunction]);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isNull = __webpack_require__(5);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    or = _require.or;

var isNotNull = __webpack_require__(2);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    both = _require.both;

var isNotNull = __webpack_require__(2);
var isOfTypeObject = __webpack_require__(15);

/* eslint-disable max-len */
/**
 * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObjectLike|isNotObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObjectLike({}); //=> true
 * RA.isObjectLike([]); //=> true
 * RA.isObjectLike(() => {}); //=> false
 * RA.isObjectLike(null); //=> false
 * RA.isObjectLike(undefined); //=> false
 */
/* eslint-enable max-len */

module.exports = both(isNotNull, isOfTypeObject);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isArray = __webpack_require__(33);

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

module.exports = _isArray;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    is = _require.is;

/**
 * Checks if value is `Date` object
 *
 * @func isDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotDate|isNotDate}
 * @example
 *
 * RA.isDate(new Date()); //=> true
 * RA.isDate('1997-07-16T19:20+01:00'); //=> false
 */

module.exports = is(Date);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    pipe = _require.pipe,
    type = _require.type,
    equals = _require.equals;

/**
 * Checks if value is a `Number` primitive or object
 *
 * @func isNumber
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNumber|isNotNumber}
 * @example
 *
 * RA.isNumber(5); // => true
 * RA.isNumber(Number.MAX_VALUE); // => true
 * RA.isNumber(-Infinity); // => true
 * RA.isNumber('5'); // => false
 */

module.exports = pipe(type, equals('Number'));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    both = _require.both,
    anyPass = _require.anyPass;

var isNotNull = __webpack_require__(2);
var isFunction = __webpack_require__(1);
var isOfTypeObject = __webpack_require__(15);

/* eslint-disable max-len */
/**
 * Checks if input value is language type of `Object`
 *
 * @func isObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotObject|isNotObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isObject({}); //=> true
 * RA.isObject([]); //=> true
 * RA.isObject(() => {}); //=> true
 * RA.isObject(null); //=> false
 * RA.isObject(undefined); //=> false
 */
/* eslint-enable max-len */

module.exports = both(isNotNull, anyPass([isOfTypeObject, isFunction]));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isObject = __webpack_require__(35);

var _require = __webpack_require__(0),
    pipe = _require.pipe,
    both = _require.both,
    equals = _require.equals,
    toString = _require.toString,
    pathSatisfies = _require.pathSatisfies;

var isNull = __webpack_require__(5);
var isObjectLike = __webpack_require__(6);
var isFunction = __webpack_require__(1);

var isObjectConstructor = pipe(toString, equals(toString(Object)));
var hasObjectConstructor = pathSatisfies(both(isFunction, isObjectConstructor), ['constructor']);

/* eslint-disable max-len */
/**
 * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`)
 *
 * @func isPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotPlainObject|isNotPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isPlainObject(new Bar()); //=> false
 * RA.isPlainObject({ prop: 'value' }); //=> true
 * RA.isPlainObject(['a', 'b', 'c']); //=> false
 * RA.isPlainObject(Object.create(null); //=> true
 * RA.isPlainObject(new Object()); //=> true
 */
/* eslint-enable max-len */

module.exports = function (val) {
  if (!isObjectLike(val) || !_isObject(val)) {
    return false;
  }

  var proto = Object.getPrototypeOf(val);

  if (isNull(proto)) {
    return true;
  }

  return hasObjectConstructor(proto);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isString = __webpack_require__(36);

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

module.exports = _isString;

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (val) {
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    or = _require.or;

var polyfill = __webpack_require__(32);

/**
 * Checks whether the passed value is `NaN` and its type is `Number`.
 * It is a more robust version of the original, global isNaN().
 *
 *
 * @func isNaN
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isNotNaN|isNotNaN}
 * @example
 *
 * RA.isNaN(NaN);        // true
 * RA.isNaN(Number.NaN); // true
 * RA.isNaN(0 / 0);      // true
 *
 * // e.g. these would have been true with global isNaN().
 * RA.isNaN('NaN');      // false
 * RA.isNaN(undefined);  // false
 * RA.isNaN({});         // false
 * RA.isNaN('blabla');   // false
 *
 * // These all return false.
 * RA.isNaN(true);
 * RA.isNaN(null);
 * RA.isNaN(37);
 * RA.isNaN('37');
 * RA.isNaN('37.37');
 * RA.isNaN('');
 * RA.isNaN(' ');
 */

module.exports = or(Number.isNaN, polyfill);

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isArray = __webpack_require__(7);

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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isAsyncFunction = __webpack_require__(3);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isBoolean = __webpack_require__(8);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isDate = __webpack_require__(9);

/**
 * Checks if value is complement of `Date` object
 *
 * @func isNotDate
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.6.0|v0.6.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isDate|isDate}
 * @example
 *
 * RA.isNotDate(new Date()); //=> false
 * RA.isNotDate('1997-07-16T19:20+01:00'); //=> true
 */

module.exports = complement(isDate);

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isFunction = __webpack_require__(1);

/* eslint-disable max-len */
/**
 * Checks if input value is complement of `Function`
 *
 * @func isNotFunction
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isFunction|isFunction}, {@link RA.isAsyncFunction|isNotAsyncFunction}, {@link RA.isGeneratorFunction|isGeneratorFunction}
 * @example
 *
 * RA.isNotFunction(function test() { }); //=> false
 * RA.isNotFunction(function* test() { }); //=> false
 * RA.isNotFunction(async function test() { }); //=> false
 * RA.isNotFunction(() => {}); //=> false
 * RA.isNotFunction(null); //=> true
 * RA.isNotFunction('abc'); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isFunction);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isGeneratorFunction = __webpack_require__(4);

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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isObject = __webpack_require__(11);

/* eslint-disable max-len */
/**
 * Checks if input value is complement of language type of `Object`
 *
 * @func isNotObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObject|isObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObject({}); //=> false
 * RA.isNotObject([]); //=> false
 * RA.isNotObject(() => {}); //=> false
 * RA.isNotObject(null); //=> true
 * RA.isNotObject(undefined); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isObject);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isObjectLike = __webpack_require__(6);

/* eslint-disable max-len */
/**
 * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
 *
 * @func isNotObjectLike
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}, {@link RA.isPlainObject|isPlainObject}
 * @example
 *
 * RA.isNotObjectLike({}); //=> false
 * RA.isNotObjectLike([]); //=> false
 * RA.isNotObjectLike(() => {}); //=> true
 * RA.isNotObjectLike(null); //=> true
 * RA.isNotObjectLike(undefined); //=> true
 */
/* eslint-enable max-len */

module.exports = complement(isObjectLike);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isPlainObject = __webpack_require__(12);

/* eslint-disable max-len */
/**
 * Check to see if an object is a not plain object (created using `{}`, `new Object()` or `Object.create(null)`)
 *
 * @func isNotPlainObject
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/0.5.0|v0.5.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {Boolean}
 * @see {@link RA.isPlainObject|isPlainObject}, {@link RA.isObjectLike|isObjectLike}, {@link RA.isObject|isObject}
 * @example
 *
 * class Bar {
 *   constructor() {
 *     this.prop = 'value';
 *   }
 * }
 *
 * RA.isNotPlainObject(new Bar()); //=> true
 * RA.isNotPlainObject({ prop: 'value' }); //=> false
 * RA.isNotPlainObject(['a', 'b', 'c']); //=> true
 * RA.isNotPlainObject(Object.create(null); //=> false
 * RA.isNotPlainObject(new Object()); //=> false
 */
/* eslint-enable max-len */

module.exports = complement(isPlainObject);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var iString = __webpack_require__(13);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isUndefined = __webpack_require__(14);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    both = _require.both;

var isNumber = __webpack_require__(10);

module.exports = both(isNumber, isNaN);

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNotUndefined = __webpack_require__(31);
var isUndefined = __webpack_require__(14);
var isNull = __webpack_require__(5);
var isNotNull = __webpack_require__(2);
var isNotNil = __webpack_require__(26);
var isArray = __webpack_require__(7);
var isNotArray = __webpack_require__(18);
var isBoolean = __webpack_require__(8);
var isNotBoolean = __webpack_require__(21);
var isNotEmpty = __webpack_require__(23);
var isNilOrEmpty = __webpack_require__(17);
var isString = __webpack_require__(13);
var isNotString = __webpack_require__(30);
var isNotArrayLike = __webpack_require__(19);
var isGeneratorFunction = __webpack_require__(4);
var isNotGeneratorFunction = __webpack_require__(25);
var isAsyncFunction = __webpack_require__(3);
var isNotAsyncFunction = __webpack_require__(20);
var isFunction = __webpack_require__(1);
var isNotFunction = __webpack_require__(24);
var isObject = __webpack_require__(11);
var isNotObject = __webpack_require__(27);
var isObjectLike = __webpack_require__(6);
var isNotObjectLike = __webpack_require__(28);
var isPlainObject = __webpack_require__(12);
var isNotPlainObject = __webpack_require__(29);
var isDate = __webpack_require__(9);
var isNotDate = __webpack_require__(22);
var isNumber = __webpack_require__(10);
var isNaN = __webpack_require__(16);

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
  isFunction: isFunction,
  isNotFunction: isNotFunction,
  isObject: isObject,
  isNotObject: isNotObject,
  isObjectLike: isObjectLike,
  isNotObjectLike: isNotObjectLike,
  isPlainObject: isPlainObject,
  isNotPlainObject: isNotPlainObject,
  isDate: isDate,
  isNotDate: isNotDate,
  isNumber: isNumber,
  isNaN: isNaN
};

/***/ })
/******/ ]);
});