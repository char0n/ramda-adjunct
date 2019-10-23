/**
 * @namespace RA
 */

// Type
export { default as allEqual } from './allEqual';
export { default as allEqualTo } from './allEqualTo';
export { default as allIdentical } from './allIdentical';
export { default as allIdenticalTo } from './allIdenticalTo';
export { default as allP } from './allP';
export { default as allSettledP } from './allSettledP';
export { default as allUnique } from './allUnique';
export { default as anyP, default as firstP } from './anyP';
export { default as appendFlipped } from './appendFlipped';
export { default as argsPass } from './argsPass';
export { default as async } from './async';
export { default as cata } from './cata';
export { default as ceil } from './ceil';
export { default as compact } from './compact';
export { default as concatAll } from './concatAll';
export { default as concatRight } from './concatRight';
export { default as contained, default as included } from './contained';
export { default as curryRight } from './curryRight';
export { default as curryRightN } from './curryRightN';
export { default as defaultWhen } from './defaultWhen';
export { default as dispatch } from './dispatch';
export { default as divideNum } from './divideNum';
export { default as dropArgs } from './dropArgs';
export { default as ensureArray } from './ensureArray';
export { default as escapeRegExp } from './escapeRegExp';
// Types
export { default as Identity } from './fantasy-land/Identity';
export { default as flattenDepth } from './flattenDepth';
export { default as flattenPath } from './flattenPath';
export { default as flattenProp } from './flattenProp';
export { default as floor } from './floor';
export { default as hasPath } from './hasPath';
export { default as inRange } from './inRange';
export { default as isArray } from './isArray';
export { default as isArrayLike } from './isArrayLike';
export { default as isAsyncFunction } from './isAsyncFunction';
export { default as isBoolean } from './isBoolean';
export { default as isDate } from './isDate';
export { default as isEmptyArray } from './isEmptyArray';
export { default as isEmptyString } from './isEmptyString';
export { default as isEven } from './isEven';
export { default as isFalse } from './isFalse';
export { default as isFalsy } from './isFalsy';
export { default as isFinite } from './isFinite';
export { default as isFloat } from './isFloat';
export { default as isFunction } from './isFunction';
export { default as isGeneratorFunction } from './isGeneratorFunction';
export { default as isInteger } from './isInteger';
export { default as isIterable } from './isIterable';
export { default as isMap } from './isMap';
export { default as isNaN } from './isNaN';
export { default as isNegative } from './isNegative';
export { default as isNegativeZero } from './isNegativeZero';
export { default as isNilOrEmpty } from './isNilOrEmpty';
export { default as isNonEmptyArray } from './isNonEmptyArray';
export { default as isNonEmptyString } from './isNonEmptyString';
export { default as isNonNegative } from './isNonNegative';
export { default as isNonPositive } from './isNonPositive';
export { default as isNotArray } from './isNotArray';
export { default as isNotArrayLike } from './isNotArrayLike';
export { default as isNotAsyncFunction } from './isNotAsyncFunction';
export { default as isNotBoolean } from './isNotBoolean';
export { default as isNotDate } from './isNotDate';
// Logic
export { default as isNotEmpty } from './isNotEmpty';
export { default as isNotFinite } from './isNotFinite';
export { default as isNotFloat } from './isNotFloat';
export { default as isNotFunction } from './isNotFunction';
export { default as isNotGeneratorFunction } from './isNotGeneratorFunction';
export { default as isNotInteger } from './isNotInteger';
export { default as isNotNaN } from './isNotNaN';
export { default as isNotNil } from './isNotNil';
export { default as isNotNilOrEmpty } from './isNotNilOrEmpty';
export { default as isNotNull } from './isNotNull';
export { default as isNotNumber } from './isNotNumber';
export { default as isNotObj, default as isNotObject } from './isNotObj';
export {
  default as isNotObjectLike,
  default as isNotObjLike,
} from './isNotObjLike';
export { default as isNotPair } from './isNotPair';
export {
  default as isNotPlainObj,
  default as isNotPlainObject,
} from './isNotPlainObj';
export { default as isNotRegExp } from './isNotRegExp';
export { default as isNotString } from './isNotString';
export { default as isNotUndefined } from './isNotUndefined';
export {
  default as isInvalidDate,
  default as isNotValidDate,
} from './isNotValidDate';
export { default as isNotValidNumber } from './isNotValidNumber';
export { default as isNull } from './isNull';
export { default as isNumber } from './isNumber';
export { default as isObj, default as isObject } from './isObj';
export { default as isObjectLike, default as isObjLike } from './isObjLike';
export { default as isOdd } from './isOdd';
export { default as isPair } from './isPair';
export { default as isPlainObj, default as isPlainObject } from './isPlainObj';
export { default as isPositive } from './isPositive';
export { default as isPositiveZero } from './isPositiveZero';
export { default as isPromise } from './isPromise';
export { default as isRegExp } from './isRegExp';
export { default as isSafeInteger } from './isSafeInteger';
export { default as isSet } from './isSet';
export { default as isSparseArray } from './isSparseArray';
export { default as isString } from './isString';
export { default as isSymbol } from './isSymbol';
export { default as isThenable } from './isThenable';
export { default as isTrue } from './isTrue';
export { default as isTruthy } from './isTruthy';
export { default as isUndefined } from './isUndefined';
export { default as isValidDate } from './isValidDate';
export { default as isValidNumber } from './isValidNumber';
export { default as lengthEq } from './lengthEq';
export { default as lengthGt } from './lengthGt';
export { default as lengthGte } from './lengthGte';
export { default as lengthLt } from './lengthLt';
export { default as lengthLte } from './lengthLte';
export { default as lengthNotEq } from './lengthNotEq';
// Relation
export { default as lensEq } from './lensEq';
export { default as lensIso } from './lensIso';
export { default as lensNotEq } from './lensNotEq';
export { default as lensNotSatisfy } from './lensNotSatisfy';
export { default as lensSatisfies } from './lensSatisfies';
export { default as lensTraverse } from './lensTraverse';
export { default as liftF } from './liftF';
export { default as liftFN } from './liftFN';
export { default as list } from './list';
// List
export { default as mapIndexed } from './mapIndexed';
export { default as mergePath } from './mergePath';
export { default as mergePaths } from './mergePaths';
export { default as mergeProp } from './mergeProp';
export { default as mergeProps } from './mergeProps';
export {
  default as mergeLeft,
  default as mergeRight,
  default as resetToDefault,
} from './mergeRight';
export { default as move } from './move';
export { default as nand } from './nand';
export { default as neither } from './neither';
export { default as noneP } from './noneP';
export { default as nonePass } from './nonePass';
export { default as noop } from './noop';
export { default as nor } from './nor';
export { default as notAllPass } from './notAllPass';
export { default as notAllUnique } from './notAllUnique';
export { default as notBoth } from './notBoth';
export { default as omitBy } from './omitBy';
export { default as omitIndexes } from './omitIndexes';
export { default as padCharsEnd } from './padCharsEnd';
export { default as padEnd } from './padEnd';
export { default as pathNotEq } from './pathNotEq';
export { default as pathOrLazy } from './pathOrLazy';
// Object
export { default as paths } from './paths';
export { default as pickIndexes } from './pickIndexes';
export { default as propNotEq } from './propNotEq';
export { default as reduceIndexed } from './reduceIndexed';
export { default as reduceP } from './reduceP';
export { default as reduceRightP } from './reduceRightP';
export { default as rejectP } from './rejectP';
export { default as renameKeys } from './renameKeys';
export { default as renameKeysWith } from './renameKeysWith';
export { default as repeatStr } from './repeatStr';
// String
export { default as replaceAll } from './replaceAll';
export { default as resolveP } from './resolveP';
// Math
export { default as round } from './round';
export { default as seq, default as sequencing } from './seq';
export { default as sign } from './sign';
export { default as sliceFrom } from './sliceFrom';
export { default as sliceTo } from './sliceTo';
export { default as spreadPath } from './spreadPath';
export { default as spreadProp } from './spreadProp';
export { default as stubArray } from './stubArray';
export { default as stubNull } from './stubNull';
export { default as stubObj, default as stubObject } from './stubObj';
export { default as stubString } from './stubString';
// Function
export { default as stubUndefined } from './stubUndefined';
export { default as subtractNum } from './subtractNum';
export { default as then, default as thenP } from './thenP';
export { default as toArray } from './toArray';
export { default as trimEnd, default as trimRight } from './trimEnd';
export { default as trimLeft, default as trimStart } from './trimStart';
export { default as trunc } from './trunc';
export { default as unzipObjWith } from './unzipObjWith';
export { default as viewOr } from './viewOr';
export { default as weave } from './weave';
export { default as weaveLazy } from './weaveLazy';
export { default as Y } from './Y';
export { default as zipObjWith } from './zipObjWith';
