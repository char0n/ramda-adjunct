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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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


var isArray = __webpack_require__(10);

/**
 * Checks if input `value` is Array
 *
 * @func isArray
 * @memberOf RA
 * @since v0.3.0
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    is = _require.is;

/**
 * Checks if input `value` is Array
 *
 * @func isBoolean
 * @memberOf RA
 * @since v0.3.0
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    equals = _require.equals;

/**
 * Checks if input `value` is `null`
 *
 * @func isNull
 * @memberOf RA
 * @since v0.1.0
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    equals = _require.equals;

/**
 * Checks if input `value` is `undefined`
 *
 * @func isUndefined
 * @memberOf RA
 * @since v0.0.1
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isArray = __webpack_require__(1);

/**
 * Checks if input `value` is complement of Array
 *
 * @func isNotArray
 * @memberOf RA
 * @since v0.3.0
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isBoolean = __webpack_require__(2);

/**
 * Checks if input `value` is complement of Boolean
 *
 * @func isNotBoolean
 * @memberOf RA
 * @since v0.3.0
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    isNil = _require.isNil,
    complement = _require.complement;

/**
 * Checks if input `value` is complement of `null` or `undefined`
 *
 * @func isNotNil
 * @memberOf RA
 * @since v0.3.0
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isNull = __webpack_require__(3);

/**
 * Checks if input `value` is complement of `null`
 *
 * @func
 * @memberOf RA
 * @since v0.1.0
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
var isNotNull = complement(isNull);

module.exports = isNotNull;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    complement = _require.complement;

var isUndefined = __webpack_require__(4);

/**
 * Checks if input `value` is complement `undefined`
 *
 * @func isNotUndefined
 * @memberOf RA
 * @since v0.0.1
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isNotUndefined = __webpack_require__(9);
var isUndefined = __webpack_require__(4);
var isNull = __webpack_require__(3);
var isNotNull = __webpack_require__(8);
var isNotNil = __webpack_require__(7);
var isArray = __webpack_require__(1);
var isNotArray = __webpack_require__(5);
var isBoolean = __webpack_require__(2);
var isNotBoolean = __webpack_require__(6);

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
  isNotBoolean: isNotBoolean
};

/***/ })
/******/ ]);
});