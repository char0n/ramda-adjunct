declare const RA: RamdaAdjunct.Static;
// TypeScript Version: 3.5

declare namespace RamdaAdjunct {
    interface Functor<T> {
        map<U>(fn: (t: T) => U): Functor<U>;
    }

    interface Apply<T> extends Functor<T> {
        ap<U>(fn: Apply<(t: T) => U>): Apply<U>;
    }

    interface Foldable<T> {
        reduce<Acc>(fn: (acc: Acc, val: T) => Acc, initAcc: Acc): Acc;
    }

    interface Semigroup {
        // https://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types
        concat(other: this): this;
    }

    interface Catamorphism<T> {
        cata<U>(leftFn: (v: U) => T, rightFn: (v: U) => T): T;
    }

    enum SettledPromiseStatus {
        Fulfilled = 'fulfilled',
        Rejected = 'rejected',
    }

    interface SettledPromise<T> {
        status: SettledPromiseStatus;
        value: T;
    }

    type KeyTypes = number | string | symbol;

    type Primitive = boolean | number | string;

    type Defined<T> = T extends undefined ? never : T;

    type Dictionary<T = unknown> = Record<KeyTypes, T>;

    type Intersect<U> =
    (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

    export type ObjectKeys<T extends Dictionary> = {
        [K in keyof T]-?: Defined<T[K]> extends object ? K : never;
    }[keyof T];

    type ValueOf<T> = T[keyof T];

    type DictionaryPredicate<T extends Dictionary> = (value: ValueOf<T>, key: keyof T) => boolean;

    type MergedProperties<T, U> = {
        [K in (keyof T & keyof U)]: undefined extends T[K] ? Defined<T[K] | U[K]> : T[K]
    };

    type MergeLeft<T, U> = Omit<T, keyof U> & Omit<U, keyof T> & MergedProperties<U, T>;

    type MergeProps<T extends Dictionary, U extends keyof T> = Omit<T, U> & Intersect<T[U]>;

    type Pair<T = unknown, U = unknown> = [T, U];

    type Predicate = (...args: readonly unknown[]) => boolean;

    type Awaited<T> = T extends Promise<infer U> ? U : T;

    type Unboxed<T> =
        T extends (infer U)[] ? U : T[Extract<keyof T, number>];

    type Variadic<T, U> = (...args: readonly T[]) => U;

    // tslint:disable-next-line:no-null-undefined-union
    type Nil = null | undefined;

    // tslint:disable-next-line:no-null-undefined-union
    type NilOrEmpty = Nil | '';

    // tslint:disable-next-line:no-null-undefined-union
    type Falsy = NilOrEmpty | false | 0 | 0n;

    interface Static {
        /**
         * Checks if input value is `Array`.
         */
        isArray(val: unknown): val is unknown[];

        /**
         * Checks whether the passed value is iterable.
         */
        isIterable(val: unknown): val is Iterable<unknown>;

        /**
         * Checks if input value is an empty `Array`.
         */
        isEmptyArray(val: unknown): val is unknown[];

        /**
         * Checks if input value is `Boolean`.
         */
        isBoolean(val: unknown): val is boolean;

        /**
         * Returns `true` if the given value is its type's empty value, `null` or `undefined`.
         */
        isNilOrEmpty(val: unknown): val is NilOrEmpty;

        /**
         * Returns `true` if the given value is not its type's empty value, nor `null` nor `undefined`.
         */
        isNotNilOrEmpty<T>(val: T): val is Exclude<T, NilOrEmpty>;

        /**
         * Checks if input value is complement of `Array`.
         */
        isNotArray<T>(val: T): val is Exclude<T, unknown[]>;

        /**
         * Checks if input value is a non empty `Array`.
         */
        isNonEmptyArray(val: unknown): val is unknown[];

        /**
         * Checks if input value is complement of `Boolean`.
         */
        isNotBoolean<T>(val: T): val is Exclude<T, boolean>;

        /**
         * Returns true if the given value is not its type's empty value; `false` otherwise.
         */
        isNotEmpty<T>(val: T): val is Exclude<T, ''>;

        /**
         * Checks if input value is complement of `null` or `undefined`.
         */
        isNotNil<T>(val: T): val is Exclude<T, Nil>;

        /**
         * Checks if input value is complement of `null`.
         */
        isNotNull<T>(val: T): val is Exclude<T, null>;

        /**
         * Checks if input value is complement of `String`.
         */
        isNotString<T>(val: T): val is Exclude<T, string>;

        /**
         * Checks if input value is a non empty `String`.
         */
        isNonEmptyString<T>(val: T): val is Exclude<T, ''>;

        /**
         * Checks if input value is complement `undefined`.
         */
        isNotUndefined<T>(val: T): val is Exclude<T, undefined>;

        /**
         * Checks if input value is `Symbol`.
         */
        isSymbol(val: unknown): val is symbol;

        /**
         * Checks if input value is `null`.
         */
        isNull(val: unknown): val is null;

        /**
         * Checks if input value is `String`.
         */
        isString(val: unknown): val is string;

        /**
         * Checks if input value is an empty `String`.
         */
        isEmptyString(val: unknown): val is '';

        /**
         * Checks if input value is `undefined`.
         */
        isUndefined(val: unknown): val is undefined;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isArrayLike(val: unknown): val is ArrayLike<unknown>;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isNotArrayLike<T>(val: T): val is Exclude<T, ArrayLike<unknown>>;

        /**
         * Checks if input value is `Generator Function`.
         */
        isGeneratorFunction(val: unknown): val is Function;

        /**
         * Checks if input value is complement of `Generator Function`.
         */
        isNotGeneratorFunction<T>(val: T): val is Exclude<T, Function>;

        /**
         * Checks if input value is `Async Function`.
         */
        isAsyncFunction(val: unknown): val is Function;

        /**
         * Checks if input value is complement of `Async Function`.
         */
        isNotAsyncFunction<T>(val: T): val is Exclude<T, Function>;

        /**
         * Checks if input value is `Function`.
         */
        isFunction(val: unknown): val is Function;

        /**
         * Checks if input value is complement of `Function`.
         */
        isNotFunction<T>(val: T): val is Exclude<T, Function>;

        /**
         * Checks if input value is language type of `Object`.
         */
        isObj(val: unknown): val is object;
        isObject(val: unknown): val is object; // alias

        /**
         * Checks if input value is complement of language type of `Object`.
         */
        isNotObj<T>(val: T): val is Exclude<T, object>;
        isNotObject<T>(val: T): val is Exclude<T, object>; // alias

        /**
         * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isObjLike<T>(val: T): val is object & Exclude<T, Function>;
        isObjectLike<T>(val: T): val is object & Exclude<T, Function>; // alias

        /**
         * Checks if value is not object-like.
         * A value is object-like if it's not null and has a typeof result of "object".
         */
        isNotObjLike<T>(val: T): val is Extract<T, Function | Nil | Primitive>;
        isNotObjectLike<T>(val: T): val is Extract<T, Function | Nil | Primitive>; // alias

        /**
         * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isPlainObj(val: unknown): val is Dictionary;
        isPlainObject(val: unknown): val is Dictionary; // alias

        /**
         * Check to see if an object is not a plain object
         * (created using `{}`, `new Object()` or `Object.create(null)`).
         */
        isNotPlainObj<T>(val: T): val is Exclude<T, Dictionary>;
        isNotPlainObject<T>(val: T): val is Exclude<T, Dictionary>; // alias

        /**
         * Checks if value is `Date` object.
         */
        isDate(val: unknown): val is Date;

        /**
         * Checks if value is complement of `Date` object.
         */
        isNotDate<T>(val: T): val is Exclude<T, Date>;

        /**
         * Checks if value is valid `Date` object.
         */
        isValidDate(val: unknown): val is Date;

        /**
         * Checks if value is complement of valid `Date` object.
         */
        isNotValidDate(val: unknown): boolean;
        isInvalidDate(val: unknown): boolean; // alias

        /**
         * Checks if value is `Map`.
         */
        isMap(val: unknown): val is Map<unknown, unknown>;

        /**
         * Checks if value is complement of `Map` object.
         */
        isNotMap<T>(val: T): val is Exclude<T, Map<unknown, unknown>>;

        /**
         * Checks whether the passed value is `NaN` and its type is `Number`.
         * It is a more robust version of the original, global isNaN().
         */
        isNaN(val: unknown): boolean;

        /**
         * Checks whether the passed value is complement of `NaN` and its type is not `Number`.
         */
        isNotNaN(val: unknown): boolean;

        /**
         * Checks if value is a `Number` primitive or object.
         */
        isNumber(val: unknown): val is number;

        /**
         * Checks if value is a complement of `Number` primitive or object.
         */
        isNotNumber<T>(val: T): val is Exclude<T, number>;

        /**
         * Checks if value is a positive `Number` primitive or object. Zero is considered neither
         * positive or negative.
         */
        isPositive(val: unknown): val is number;

        /**
         * Checks if value is a negative `Number` primitive or object. Zero is considered neither
         * positive or negative.
         */
        isNegative(val: unknown): val is number;

        /**
         * Checks if value is a positive zero (+0).
         */
        isPositiveZero(val: unknown): val is number;

        /**
         * Checks if value is a negative zero (-0).
         */
        isNegativeZero(val: unknown): val is number;

        /**
         * Checks if value is a non-positive `Number` primitive or object. This includes all
         * negative numbers and zero.
         */
        isNonPositive(val: unknown): boolean;

        /**
         * Checks if value is a non-negative `Number` primitive or object. This includes all
         * positive numbers and zero.
         */
        isNonNegative(val: unknown): boolean;

        /**
         * Checks whether the passed value is a finite `Number`.
         */
        isFinite(val: unknown): val is number;

        /**
         * Checks whether the passed value is complement of finite `Number`.
         */
        isNotFinite(val: unknown): boolean;

        /**
         * Checks whether the passed value is an `integer`.
         */
        isInteger(val: unknown): val is number;

        /**
         * Checks whether the passed value is complement of `integer`.
         */
        isNotInteger<T>(val: T): val is Exclude<T, number>;

        /**
         * Checks if value is a BigInt.
         */
        isBigInt(val: unknown): val is bigint;

        /**
         * Checks whether the passed value is a `float`.
         */
        isFloat(val: unknown): val is number;

        /**
         * Checks whether the passed value is a safe `integer`.
         */
        isSafeInteger(val: unknown): val is number;

        /**
         * Checks whether the passed value is complement of a `float`.
         */
        isNotFloat(val: unknown): boolean;

        /**
         * Checks if value is a valid `Number`. A valid `Number` is a number that is not `NaN`,
         * `Infinity` or `-Infinity`.
         */
        isValidNumber(val: unknown): val is number;

        /**
         * Checks if value is not a valid `Number`. A valid `Number` is a number that is not `NaN`,
         * `Infinity` or `-Infinity`.
         */
        isNotValidNumber(val: unknown): boolean;

        /**
         * Checks if value is odd integer number.
         * An odd number is an integer which is not a multiple DIVISIBLE of two.
         */
        isOdd(val: unknown): val is number;

        /**
         * Checks if value is even integer number.
         * An even number is an integer which is "evenly divisible" by two.
         * Zero is an even number because zero divided by two equals zero,
         * which despite not being a natural number, is an integer.
         * Even numbers are either positive or negative.
         */
        isEven(val: unknown): val is number;

        /**
         * Checks if input value is a pair.
         */
        isPair(val: unknown): val is Pair;

        /**
         * Checks if input value is complement of a pair.
         */
        isNotPair<T>(val: T): val is Exclude<T, Pair>;

        /**
         * Checks if value is `RegExp` object.
         */
        isRegExp(val: unknown): val is RegExp;

        /**
         * Checks if value is complement of `RegExp` object.
         */
        isNotRegExp<T>(val: T): val is Exclude<T, RegExp>;

        /**
         * Checks if value is `Set`.
         */
        isSet(val: unknown): val is Set<unknown>;

        /**
         * Checks if value is complement of `Set` object.
         */
        isNotSet<T>(val: T): val is Exclude<T, Set<unknown>>;

        /**
         * Checks if input value is a sparse Array.
         * An array with at least one "empty slot" in it is often called a "sparse array."
         * Empty slot doesn't mean that the slot contains `null` or `undefined` values,
         * but rather that the slots don't exist.
         */
        isSparseArray(val: unknown): val is unknown[];

        /**
         * Determine if input value is an indexed data type.
         */
        isIndexed(val: unknown): val is string | unknown[];

        /**
         * Checks if input value is a `thenable`.
         * `thenable` is an object or function that defines a `then` method.
         */
        isThenable(val: unknown): val is Function | { then: () => unknown };

        /**
         * Checks if input value is a native `Promise`.
         * The Promise object represents the eventual completion (or failure)
         * of an asynchronous operation, and its resulting value.
         */
        isPromise(val: unknown): val is Promise<unknown>;

        /**
         * Checks if input value is the Boolean primitive `true`. Will return false for Boolean
         * objects created using the `Boolean` function as a constructor.
         */
        isTrue(val: unknown): val is true;

        /**
         * Checks if input value is the Boolean primitive `false`. Will return false for Boolean objects created using the `Boolean` function as a constructor.
         */
        isFalse(val: unknown): val is false;

        /**
         * In JavaScript, a `truthy` value is a value that is considered true
         * when evaluated in a Boolean context. All values are truthy unless
         * they are defined as falsy (i.e., except for `false`, `0`, `0n`, `''`, `null`, `undefined` and `NaN`).
         */
        isTruthy<T>(val: T): val is Exclude<T, Falsy>;

        /**
         * A falsy value is a value that translates to false when evaluated in a Boolean context.
         * Falsy values are `false`, `0`, `0n`, `''`, `null`, `undefined` and `NaN`.
         */
        isFalsy(val: unknown): val is Falsy;

        /**
         * A function that returns `undefined`.
         */
        stubUndefined(): undefined;

        /**
         * A function that returns `null`.
         */
        stubNull(): null;

        /**
         * A function that returns new empty array on every call.
         */
        stubArray(): unknown[];

        /**
         * This function returns a new empty object.
         */
        stubObj(): object;
        stubObject(): object; // alias

        /**
         * A function that returns empty string.
         */
        stubString(): '';

        /**
         * A function that performs no operations.
         */
        noop(...args: readonly unknown[]): undefined;

        /**
         * Picks values from list by indexes.
         */
        pickIndexes<T>(indexes: readonly number[], list: readonly T[]): T[];
        pickIndexes(indexes: readonly number[]): <T>(list: readonly T[]) => T[];

        /**
         * Creates a list from from arguments.
         */
        list(...items: readonly unknown[]): unknown[];

        /**
         * Returns a singleton array containing the value provided.
         * If value is already an array, it is returned as is.
         */
        ensureArray<T>(val: T | readonly T[]): T[];

        /**
         * Returns the result of concatenating the given lists or strings.
         * Note: RA.concatAll expects all elements to be of the same type.
         * It will throw an error if you concat an Array with a non-Array value.
         * Dispatches to the concat method of the preceding element, if present.
         * Can also concatenate multiple elements of a [fantasy-land compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
         * Returns undefined if empty array was passed.
         */
        concatAll<T extends Semigroup>(foldable: Foldable<T>): T | undefined;

        /**
         * Returns the result of concatenating the given lists or strings.
         */
        concatRight(firstList: string, secondList: string): string;
        concatRight(firstList: string): (secondList: string) => string;
        concatRight<T>(firstList: readonly T[], secondList: readonly T[]): T[];
        concatRight<T>(firstList: readonly T[]): (secondList: readonly T[]) => T[];

        /**
         * Acts as multiple path: arrays of paths in, array of values out. Preserves order.
         */
        paths(ps: readonly KeyTypes[][], obj: Dictionary): unknown[];
        paths(ps: readonly KeyTypes[][]): (obj: Dictionary) => unknown[];

        /**
         * If the given, non-null object has a value at the given path, returns the value at that path.
         * Otherwise returns the result of invoking the provided function with the object.
         */
        pathOrLazy(
            defaultValueFn: Function,
            path: readonly KeyTypes[],
            obj: Dictionary
        ): unknown;
        pathOrLazy(
            defaultValueFn: Function,
            path: readonly KeyTypes[],
        ): (obj: Dictionary) => unknown;
        pathOrLazy(
            defaultValueFn: Function
        ): {
            (path: readonly KeyTypes[], obj: Dictionary): unknown;
            (path: readonly KeyTypes[]): (obj: Dictionary) => unknown;
        };

        /**
         * "lifts" a function to be the specified arity, so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftFN<T>(arity: number, fn: Variadic<Apply<T>, T>): Apply<T>;
        liftFN(arity: number): <T>(fn: Variadic<Apply<T>, T>) => Apply<T>;

        /**
         * "lifts" a function of arity > 1 so that it may "map over" objects that satisfy
         * the Apply spec of fantasy land.
         */
        liftF<T>(fn: Variadic<Apply<T>, T>): Apply<T>;

        /**
         * The catamorphism for either. If the either is right than the right function will be executed with
         * the right value and the value of the function returned. Otherwise the left function
         * will be called with the left value.
         */
        cata<V1, V2, T1, T2>(
            leftFn: (leftValue: V1) => T1,
            rightFn: (rightValue: V2) => T2,
            either: Catamorphism<V1 | V2>,
        ): T1 | T2;
        cata<V1, V2, T1, T2>(
            leftFn: (leftValue: V1) => T1,
            rightFn: (rightValue: V2) => T2):
            (either: Catamorphism<V1 | V2>,
            ) => T1 | T2;
        cata<V1, V2, T1, T2>(leftFn: (leftValue: V1) => T1): {
            (rightFn: (rightValue: V2) => T1, either: Catamorphism<V1 | V2>): T1 | T2;
            (rightFn: (rightValue: V2) => T1): (either: Catamorphism<V1 | V2>) => T1 | T2
        };

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to the keysMap object as `{oldKey: newKey}`.
         * When some key is not found in the keysMap, then it's passed as-is.
         */
        renameKeys<T extends Dictionary>(keysMap: Partial<Record<keyof T, KeyTypes>>, obj: T): Record<KeyTypes, ValueOf<T>>;
        renameKeys<T extends Dictionary>(keysMap: Partial<Record<keyof T, KeyTypes>>): (obj: T) => Record<KeyTypes, ValueOf<T>>;

        /**
         * Creates a new object with the own properties of the provided object, but the
         * keys renamed according to logic of renaming function.
         */
        renameKeysWith<T extends Dictionary>(renameFn: (key: keyof T) => KeyTypes, obj: T): Record<KeyTypes, ValueOf<T>>;
        renameKeysWith<T extends Dictionary>(renameFn: (key: keyof T) => KeyTypes): (obj: T) => Record<KeyTypes, ValueOf<T>>;

        /**
         * Create a new object with the own properties of the second object merged with
         * the own properties of the first object. If a key exists in both objects,
         * the value from the first object will be used. *
         * Putting it simply: it sets properties only if they don't exist.
         */
        mergeRight<T extends Dictionary, U extends Dictionary>(source: T, destination: T): MergeLeft<T, U>;
        mergeRight<T extends Dictionary, U extends Dictionary>(source: T): (destination: T) => MergeLeft<T, U>;
        mergeLeft<T extends Dictionary, U extends Dictionary>(source: T, destination: T): MergeLeft<T, U>; // alias
        mergeLeft<T extends Dictionary, U extends Dictionary>(source: T): (destination: T) => MergeLeft<T, U>; // alias
        resetToDefault<T extends Dictionary, U extends Dictionary>(source: T, destination: T): MergeLeft<T, U>; // alias
        resetToDefault<T extends Dictionary, U extends Dictionary>(source: T): (destination: T) => MergeLeft<T, U>; // alias

        /**
         * Functional equivalent of merging object properties with object spread.
         */
        mergeProps<T extends Dictionary, U extends ObjectKeys<T>>(keys: readonly U[], obj: T): MergeProps<T, U>;
        mergeProps<T extends Dictionary, U extends ObjectKeys<T>>(keys: readonly U[]): (obj: T) => MergeProps<T, U>;

        /**
         * Merge objects under corresponding paths.
         */
        mergePaths<T extends Dictionary>(paths: readonly KeyTypes[][], obj: T): Partial<T>;
        mergePaths(paths: readonly KeyTypes[][]): <T extends Dictionary>(obj: T) => Partial<T>;

        /**
         * Create a new object with the own properties of the object under the `p`
         * merged with the own properties of the provided `source`.
         * If a key exists in both objects, the value from the `source` object will be used.
         */
        mergeProp<T extends Dictionary, U extends Dictionary>(key: keyof U, source: T, obj: U): Partial<T & U>;
        mergeProp<T extends Dictionary, U extends Dictionary>(key: keyof U, source: T): (obj: U) => Partial<T & U>;
        mergeProp<T extends Dictionary, U extends Dictionary>(key: keyof U): {
            (source: T, obj: U): Partial<T & U>;
            (source: T): (obj: U) => Partial<T & U>;
        };

        /**
         * Create a new object with the own properties of the object under the `path`
         * merged with the own properties of the provided `source`.
         * If a key exists in both objects, the value from the `source` object will be used.
         */
        mergePath<T extends Dictionary, U extends Dictionary>(path: readonly KeyTypes[], source: T, obj: U): Partial<T & U>;
        mergePath<T extends Dictionary>(path: readonly KeyTypes[], source: T): <U extends Dictionary>(obj: U) => Partial<T & U>;
        mergePath(path: readonly KeyTypes[]): {
            <T extends Dictionary, U extends Dictionary>(source: T, obj: U): Partial<T & U>;
            <T extends Dictionary>(source: T): <U extends Dictionary>(obj: U) => Partial<T & U>;
        };

        /**
         * Returns a partial copy of an object containing only the keys
         * that don't satisfy the supplied predicate.
         */
        omitBy<T extends Dictionary>(pred: DictionaryPredicate<T>, obj: T): Partial<T>;
        omitBy<T extends Dictionary>(pred: DictionaryPredicate<T>): (obj: T) => Partial<T>;

        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weave(fn: Function, config: unknown): Function;
        weave(fn: Function): (config: unknown) => Function;

        /**
         * Weave a configuration into function returning the runnable monad like `Reader` or `Free`.
         */
        weaveLazy(fn: Function, configAccessor: Function): Function;
        weaveLazy(fn: Function): (configAccessor: Function) => Function;

        /**
         * Returns a curried equivalent of the provided function, with the specified arity.
         * This function is like curryN, except that the provided arguments order is reversed.
         */
        curryRightN(arity: number, fn: Function): Function;
        curryRightN(arity: number): (fn: Function) => Function;

        /**
         * Returns a curried equivalent of the provided function.
         * This function is like curry, except that the provided arguments order is reversed.
         */
        curryRight(fn: Function): Function;

        /**
         * {@link http://ramdajs.com/docs/#map|R.map} function that more closely resembles Array.prototype.map.
         * It takes two new parameters to its callback function: the current index, and the entire list.
         */
        mapIndexed(fn: (char: string, key: number, str: string) => string, str: string): string[];
        mapIndexed(fn: (char: string, key: number, str: string) => string): (str: string) => string[];
        mapIndexed<TSource, TResult>(fn: (elem: TSource, key: number, list: readonly TSource[]) => TResult, list: readonly TSource[]): TResult[];
        mapIndexed<TSource, TResult>(fn: (elem: TSource, key: number, list: readonly TSource[]) => TResult): (list: readonly TSource[]) => TResult[];
        mapIndexed<TSource, TResult>(
            fn: (elem: TSource, key: number, list: Dictionary<TSource>) => TResult,
            list: Dictionary<TSource>,
        ): Dictionary<TResult>;
        mapIndexed<TSource, TResult>(
            fn: (elem: TSource, key: number, list: Dictionary<TSource>) => TResult,
        ): (list: Dictionary<TSource>) => Dictionary<TResult>;
        mapIndexed<TSource, TResult>(fn: (elem: TSource, key: number, list: Functor<TSource>) => TResult, list: Functor<TSource>): Functor<TResult>;
        mapIndexed<TSource, TResult>(fn: (elem: TSource, key: number, list: Functor<TSource>) => TResult): (list: Functor<TSource>) => Functor<TResult>;

        /**
         * {@link http://ramdajs.com/docs/#reduce|R.reduce} function that more closely resembles Array.prototype.reduce.
         * It takes two new parameters to its callback function: the current index, and the entire list.
         */
        reduceIndexed<TSource, TAccumulator>(
            fn: (acc: TAccumulator, elem: TSource, key: number, list: readonly TSource[]) => TAccumulator,
            acc: TAccumulator,
            list: readonly TSource[],
        ): TAccumulator;
        reduceIndexed<TSource, TAccumulator>(
            fn: (acc: TAccumulator, elem: TSource, key: number, list: readonly TSource[]) => TAccumulator,
            acc: TAccumulator,
        ): (list: readonly TSource[]) => TAccumulator;
        reduceIndexed<TSource, TAccumulator>(
            fn: (acc: TAccumulator, elem: TSource, key: number, list: readonly TSource[]) => TAccumulator,
        ): {
            (acc: TAccumulator): (list: readonly TSource[]) => TAccumulator;
            (acc: TAccumulator, list: readonly TSource[]): TAccumulator
        };

        /**
         * Given an `Iterable` (arrays are `Iterable`), or a promise of an `Iterable`,
         * which produces promises (or a mix of promises and values),
         * iterate over all the values in the `Iterable` into an array and
         * reduce the array to a value using the given iterator function.
         */
        reduceP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult,
            acc: TAccumulator,
            list: readonly TSource[]
        ): TResult | Promise<Awaited<TResult>>;
        reduceP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult,
            acc: TAccumulator
        ): (list: readonly TSource[]) => TResult | Promise<Awaited<TResult>>;
        reduceP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult): {
            (acc: TAccumulator, list: readonly TSource[]): TResult;
            (acc: TAccumulator): (list: readonly TSource[]) => TResult | Promise<Awaited<TResult>>;
        };

        /**
         * Given an `Iterable` (arrays are `Iterable`), or a promise of an `Iterable`,
         * which produces promises (or a mix of promises and values),
         * iterate over all the values in the `Iterable` into an array and
         * reduce the array to a value using the given iterator function.
         *
         * Similar to {@link RA.reduceP|reduceP} except moves through the input list from the right to the left.
         * The iterator function receives two values: (value, acc),
         * while the arguments' order of reduceP's iterator function is (acc, value).
         */
        reduceRightP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult,
            acc: TAccumulator,
            list: readonly TSource[]
        ): TResult | Promise<Awaited<TResult>>;
        reduceRightP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult,
            acc: TAccumulator
        ): (list: readonly TSource[]) => TResult | Promise<Awaited<TResult>>;
        reduceRightP<TSource, TAccumulator, TResult>(
            fn: (acc: TAccumulator, elem: TSource) => TResult): {
            (acc: TAccumulator, list: readonly TSource[]): TResult;
            (acc: TAccumulator): (list: readonly TSource[]) => TResult | Promise<Awaited<TResult>>;
        };

        /**
         * Returns `true` if data structure focused by the given lens equals provided value.
         */
        lensEq(lens: Function, value: unknown, data: unknown): boolean;
        lensEq(lens: Function, value: unknown): (data: unknown) => boolean;
        lensEq(lens: Function): (value: unknown) => (data: unknown) => boolean;

        /**
         * Returns `false` if data structure focused by the given lens equals provided value.
         */
        lensNotEq(lens: Function, value: unknown, data: unknown): boolean;
        lensNotEq(lens: Function, value: unknown): (data: unknown) => boolean;
        lensNotEq(lens: Function): (value: unknown) => (data: unknown) => boolean;

        /**
         * Returns `true` if data structure focused by the given lens satisfies the predicate.
         * Note that the predicate is expected to return boolean value and will be evaluated
         * as `false` unless the predicate returns `true`.
         */
        lensSatisfies(predicate: Function, lens: Function, data: unknown): boolean;
        lensSatisfies(predicate: Function, lens: Function): (data: unknown) => boolean;
        lensSatisfies(predicate: Function): (lens: Function) => (data: unknown) => boolean;

        /**
         * Returns `true` if data structure focused by the given lens doesn't satisfy the predicate.
         * Note that the predicate is expected to return boolean value.
         */
        lensNotSatisfy(predicate: Function, lens: Function, data: unknown): boolean;
        lensNotSatisfy(predicate: Function, lens: Function): (data: unknown) => boolean;
        lensNotSatisfy(predicate: Function): (lens: Function) => (data: unknown) => boolean;

        /**
         * Returns a "view" of the given data structure, determined by the given lens
         * The lens's focus determines which portion of the data structure is visible.
         * Returns the defaultValue if "view" is null, undefined or NaN; otherwise the "view" is returned.
         */
        viewOr(defaultValue: unknown, lens: Function, data: unknown): unknown;
        viewOr(defaultValue: unknown, lens: Function): (data: unknown) => unknown;
        viewOr(defaultValue: unknown): (lens: Function) => (data: unknown) => unknown;

        /**
         * Defines an isomorphism that will work like a lens. It takes two functions.
         * The function that converts and the function that recovers.
         */
        lensIso: {
            (to: Function, from: Function): Function
            (to: Function): (from: Function) => Function
            from(lens: Function): Function,
        };

        /**
         * Creates a [Traversable](https://github.com/fantasyland/fantasy-land#traversable) lens
         * from an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning function.
         *
         * When executed, it maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
         * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
         * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
         * into an Applicative of Traversable.
         *
         * Dispatches to the `traverse` method of the third argument, if present.
         */
        lensTraverse(of: Function): Function;

        /**
         * Returns true if the specified object property is not equal,
         * in R.equals terms, to the given value; false otherwise.
         */
        propNotEq<T extends Dictionary, U extends keyof T>(prop: U, value: T[U], obj: T): boolean;
        propNotEq<T extends Dictionary, U extends keyof T>(prop: U, value: T[U]): (obj: T) => boolean;
        propNotEq<T extends Dictionary, U extends keyof T>(prop: U): {
            (value: T[U], obj: T): boolean;
            (value: T[U]): (obj: T) => boolean;
        };

        /**
         * Determines whether a nested path on an object doesn't have a specific value,
         * in R.equals terms. Most likely used to filter a list.
         */
        pathNotEq(path: readonly KeyTypes[], value: unknown, obj: Dictionary): boolean;
        pathNotEq(path: readonly KeyTypes[], value: unknown): (obj: Dictionary) => boolean;
        pathNotEq(path: readonly KeyTypes[]): {
            (value: unknown, obj: Dictionary): boolean;
            (value: unknown): (obj: Dictionary) => boolean;
        };

        /**
         * Checks if `value` is between `low` and up to but not including `high`.
         */
        inRange(low: number, high: number, value: number): boolean;
        inRange(low: number, high: number): (value: number) => boolean;
        inRange(low: number): {
            (high: number, value: number): boolean;
            (high: number): (value: number) => boolean;
        };

        /**
         * Returns whether or not an object has an own property with the specified name at a given path.
         */
        hasPath(path: readonly KeyTypes[]): (obj: Dictionary) => boolean;
        hasPath(path: readonly KeyTypes[], obj: Dictionary): boolean;

        /**
         * Spreads object under property path onto provided object.
         */
        spreadPath<T extends Dictionary>(path: readonly KeyTypes[], obj: T): Partial<T>;
        spreadPath<T extends Dictionary>(path: readonly KeyTypes[]): (obj: T) => Partial<T>;

        /**
         * Spreads object under property onto provided object.
         */
        spreadProp<T extends Dictionary, U extends ObjectKeys<T>>(prop: U, obj: T): Omit<T, U> & T[U];
        spreadProp<T extends Dictionary, U extends ObjectKeys<T>>(prop: U): (obj: T) => Omit<T, U> & T[U];

        /**
         * Flattens a property path so that its fields are spread out into the provided object.
         */
        flattenPath<T extends Dictionary>(path: readonly KeyTypes[], obj: T): T & Dictionary;
        flattenPath(path: readonly KeyTypes[]): <T extends Dictionary>(obj: T) => T & Dictionary;

        /**
         * Flattens a property so that its fields are spread out into the provided object.
         */
        flattenProp<T extends Dictionary, U extends ObjectKeys<T>>(prop: U, obj: T): T & T[U];
        flattenProp<T extends Dictionary, U extends ObjectKeys<T>>(prop: U): (obj: T) => T & T[U];

        /**
         * Creates a new object out of a list of keys and a list of values by applying the function
         * to each equally-positioned pair in the lists.
         * Key/value pairing is truncated to the length of the shorter of the two lists.
         */
        zipObjWith<T, U extends KeyTypes>(fn: (value: Unboxed<T[]>, key: U) => Pair, keys: readonly U[], values: readonly T[]): Dictionary;
        zipObjWith<T, U extends KeyTypes>(fn: (value: Unboxed<T[]>, key: U) => Pair): (keys: readonly U[], values: readonly T[]) => Dictionary;
        zipObjWith<T, U extends KeyTypes>(fn: (value: Unboxed<T[]>, key: U) => Pair): {
            (keys: readonly U[], values: readonly T[]): Dictionary;
            (keys: readonly U[]): (values: readonly T[]) => Dictionary;
        };

        /**
         * Creates a new list out of the supplied object by applying the function to each key/value pairing.
         */
        unzipObjWith<T extends Dictionary, U, V>(fn: (value: ValueOf<T>, key: keyof T) => Pair<U, V>, obj: T): [U[], V[]];
        unzipObjWith<T extends Dictionary, U, V>(fn: (value: ValueOf<T>, key: keyof T) => Pair<U, V>): (obj: T) => [U[], V[]];

        /**
         * Composable shortcut for `Promise.all`.
         *
         * The `allP` method returns a single Promise that resolves when all of the promises
         * in the iterable argument have resolved or when the iterable argument contains no promises.
         * It rejects with the reason of the first promise that rejects.
         */
        allP<T>(iterable: Iterable<T>): Promise<T[]>;

        /**
         * Returns a Promise that is resolved with an array of reasons when all of the provided Promises reject, or rejected when any Promise is resolved.
         * This pattern is like allP, but fulfillments and rejections are transposed - rejections become the fulfillment values and vice versa.
         */
        noneP<T>(iterable: Iterable<T | Promise<T>>): Promise<T[]>;

        /**
         * allSettledP returns a promise that is fulfilled with an array of promise state snapshots,
         * but only after all the original promises have settled, i.e. become either fulfilled or rejected.
         * We say that a promise is settled if it is not pending, i.e. if it is either fulfilled or rejected.
         */
        allSettledP<T>(iterable: Iterable<T>): Promise<SettledPromise<T>[]>;

        /**
         * Returns a promise that is fulfilled by the first given promise to be fulfilled,
         * or rejected with an array of rejection reasons if all of the given promises are rejected.
         */
        anyP<T>(iterable: Iterable<T>): Promise<T>;
        firstP<T>(iterable: Iterable<T>): Promise<T>; // alias

        /**
         * Returns a promise that is fulfilled by the last given promise to be fulfilled,
         * or rejected with an array of rejection reasons if all of the given promises are rejected.
         */
        lastP<T>(iterable: Iterable<T>): Promise<T>;

        /**
         * Composable shortcut for `Promise.resolve`.
         *
         * Returns a Promise object that is resolved with the given value.
         * If the value is a thenable (i.e. has a "then" method), the returned promise will
         * "follow" that thenable, adopting its eventual state.
         */
        resolveP<T>(val?: T): Promise<T>;

        /**
         * Composable shortcut for `Promise.reject`.
         *
         * Returns a Promise object that is rejected with the given reason.
         */
        rejectP<T>(val?: T): Promise<T>;

        /**
         * Creates a promise which resolves/rejects after the specified milliseconds.
         */
        delayP: {
            (milliseconds: number): Promise<undefined>
            <T>(options: { timeout: number, value: T }): Promise<T>
            reject(milliseconds: number): Promise<undefined>
            reject<T>(options: { timeout: number, value: T }): Promise<T>
        };

        /**
         * Composable shortcut for `Promise.then`.
         * The thenP function returns a Promise. It takes two arguments: a callback function for the success of the Promise
         * and the promise instance itself.
         */
        thenP<T>(onFulfilled: Function, thenable: Promise<T>): Promise<T>;
        thenP<T>(onFulfilled: Function): (thenable: Promise<T>) => Promise<T>;
        then<T>(onFulfilled: Function, thenable: Promise<T>): Promise<T>;
        then<T>(onFulfilled: Function): (thenable: Promise<T>) => Promise<T>;

        /**
         * Composable shortcut for `Promise.then` that allows for success and failure call backs.
         * The thenCatchP function returns a Promise. It takes three arguments: a callback function for the success of the Promise,
         * a callback function for the failure of the Promise, and the promise instance itself.
         */
        thenCatchP<T, U>(onFulfilled: Function, onRejected: (error: unknown) => U | Promise<U>, thenable: Promise<T>): Promise<T | U>;
        thenCatchP<T, U>(onFulfilled: Function, onRejected: (error: unknown) => U | Promise<U>): (thenable: Promise<T>) => Promise<T | U>;
        thenCatchP<T, U>(onFulfilled: Function): (onRejected: (error: unknown) => U | Promise<U>) => (thenable: Promise<T>) => Promise<T | U>;

        /**
         * Runs the given list of functions in order with the supplied object, then returns the object.
         * Also known as the normal order sequencing combinator.
         *
         * Acts as a transducer if a transformer is given as second parameter.
         */
        seq<T>(fns: readonly Function[], x: T): T;
        seq(fns: readonly Function[]): <T>(x: T) => T;
        sequencing<T>(fns: readonly Function[], x: T): T; // alias
        sequencing(fns: readonly Function[]): <T>(x: T) => T; // alias

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * from fromIndex (inclusive).
         * Dispatches to the slice method of the third argument, if present.
         */
        sliceFrom(fromIndex: number, list: string): string;
        sliceFrom(fromIndex: number): (list: string) => string;
        sliceFrom<T>(fromIndex: number, list: readonly T[]): T[];
        sliceFrom(fromIndex: number): <T>(list: readonly T[]) => T[];

        /**
         * Returns the elements of the given list or string (or object with a slice method)
         * to toIndex (exclusive).
         * Dispatches to the slice method of the second argument, if present.
         */
        sliceTo(toIndex: number, list: string): string;
        sliceTo(toIndex: number): (list: string) => string;
        sliceTo<T>(toIndex: number, list: readonly T[]): T[];
        sliceTo(toIndex: number): <T>(list: readonly T[]) => T[];

        /**
         * Returns a partial copy of an array omitting the indexes specified.
         */
        omitIndexes<T>(indexes: readonly number[], list: readonly T[]): T[];
        omitIndexes(indexes: readonly number[]): <T>(list: readonly T[]) => T[];

        /**
         * Returns `true` if the supplied list or string has a length greater than `valueLength`.
         */
        lengthGt(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthGt(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length less than `valueLength`.
         */
        lengthLt(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthLt(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length less than or equal to
         * `valueLength`.
         */
        lengthLte(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthLte(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length greater than or equal to
         * `valueLength`.
         */
        lengthGte(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthGte(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length equal to `valueLength`.
         */
        lengthEq(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthEq(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         * Returns `true` if the supplied list or string has a length not equal to `valueLength`.
         */
        lengthNotEq(valueLength: number, list: string | readonly unknown[]): boolean;
        lengthNotEq(valueLength: number): (list: string | readonly unknown[]) => boolean;

        /**
         *  Returns true if all items in the list are equivalent using `R.equals` for equality comparisons.
         */
        allEqual(list: readonly unknown[]): boolean;

        /**
         * Constructs and returns a new string which contains the specified
         * number of copies of the string on which it was called, concatenated together.
         */
        repeatStr(value: string, count: number): string;
        repeatStr(value: string): (count: number) => string;

        /*
         * Returns true if all items in the list are equivalent using `R.identical` for equality comparisons.
         */
        allIdentical(list: readonly unknown[]): boolean;

        /*
         * Returns true if all items in the list are equivalent to user provided value using `R.identical` for equality comparisons.
         */
        allIdenticalTo<T>(val: T, list: readonly T[]): boolean;
        allIdenticalTo<T>(val: T): (list: readonly T[]) => boolean;

        /*
         * Returns true if all items in the list are equivalent to user provided value using `R.equals` for equality comparisons.
         */
        allEqualTo<T>(val: T, list: readonly T[]): boolean;
        allEqualTo<T>(val: T): (list: readonly T[]) => boolean;

        /*
         * Flattens the list to the specified depth.
         */
        flattenDepth<T>(depth: number, list: readonly T[]): T[];
        flattenDepth(depth: number): <T>(list: readonly T[]) => T[];

        /**
         * Returns the second argument if predicate function returns `true`,
         * otherwise the third argument is returned.
         */
        defaultWhen<T, U>(predicate: Predicate, defaultVal: T, val: U): T | U;
        defaultWhen<T, U>(predicate: Predicate, defaultVal: T): (val: U) => T | U;
        defaultWhen(predicate: Predicate): <T, U>(defaultVal: T) => (val: U) => T | U;

        /**
         * Y-combinator
         *
         * The Y combinator is an interesting function which only works with functional languages,
         * showing how recursion can still be done even without any variable or function declarations,
         * only functions and parameters
         */
        Y(le: Function): Function;

        /**
         * A function which calls the two provided functions and returns the complement of `&&`ing
         * the results. It returns true if the first function is false-y and the complement of the
         * second function otherwise. Note that this is short-circuited, meaning that the second
         * function will not be invoked if the first returns a false-y value. In short it will
         * return true unless both predicates return true.
         *
         * In addition to functions, `RA.notBoth` also accepts any fantasy-land compatible
         * applicative functor.
         */
        notBoth(firstPredicate: Predicate, secondPredicate: Predicate): Predicate;

        /**
         * A function which calls the two provided functions and returns the complement of `||`ing
         * the results. It returns false if the first function is truth-y and the complement of the
         * second function otherwise. Note that this is short-circuited, meaning that the second
         * function will not be invoked if the first returns a truth-y value. In short it will
         * return true if neither predicate returns true.
         *
         * In addition to functions, `RA.neither` also accepts any fantasy-land compatible
         * applicative functor.
         */
        neither(firstPredicate: Predicate, secondPredicate: Predicate): Predicate;

        /**
         * Returns false if both arguments are truthy; true otherwise.
         */
        nand(a: unknown, b: unknown): boolean;
        nand(a: unknown): (b: unknown) => boolean;

        /**
         * Returns true if both arguments are falsy; false otherwise.
         */
        nor(a: unknown, b: unknown): boolean;
        nor(a: unknown): (b: unknown) => boolean;

        /**
         * Takes a list of predicates and returns a predicate that returns true for a given list of
         * arguments if one or more of the provided predicates is not satisfied by those arguments.
         * It is the complement of Ramda's allPass.
         *
         * The function returned is a curried function whose arity matches that of the
         * highest-arity predicate.
         */
        notAllPass(predicates: readonly Predicate[]): Predicate;

        /**
         * Takes a list of predicates and returns a predicate that returns true for a given list of
         * arguments if none of the provided predicates are satisfied by those arguments. It is the
         * complement of Ramda's unknownPass.
         *
         * The function returned is a curried function whose arity matches that of the
         * highest-arity predicate.
         */
        nonePass(predicates: readonly Predicate[]): Predicate;

        /**
         * Takes a combining predicate and a list of functions and returns a function which will map
         * the arguments it receives to the list of functions and returns the result of passing the
         * values returned from each function to the combining predicate. A combining predicate is a
         * function that combines a list of Boolean values into a single Boolean value, such as
         * `R.any` or `R.all`. It will test each value using `RA.isTruthy`, meaning the functions
         * don't necessarily have to be predicates.
         *
         * The function returned is curried to the number of functions supplied, and if called with
         * more arguments than functions, any remaining arguments are passed in to the combining
         * predicate untouched.
         */
        argsPass<T>(combiningPredicate: (fn: (a: T) => boolean) => (list: readonly T[]) => boolean, predicates: readonly Predicate[]): Predicate;
        argsPass<T>(combiningPredicate: (fn: (a: T) => boolean) => (list: readonly T[]) => boolean): (predicates: readonly Predicate[]) => Predicate;

        /**
         * Returns a function which is called with the given arguments. If any of the given arguments are null or undefined,
         * the corresponding default value for that argument is used instead.
         */
        fnull(fn: Function, defaults: readonly unknown[]): Function;
        fnull(fn: Function): (defaults: readonly unknown[]) => Function;

        /**
         * Accepts a function with any arity and returns a function with arity of zero.
         * The returned function ignores any arguments supplied to it.
         */
        dropArgs(fn: Function): Function;

        /**
         * Creates an array with all falsy values removed.
         * Falsy values are `false`, `0`, `0n`, `''`, `null`, `undefined` and `NaN`.
         */
        compact<T>(list: readonly T[]): Exclude<T, Falsy>[];

        /**
         * Returns a new list containing the contents of the given list, followed by the given
         * element. Like {@link http://ramdajs.com/docs/#append|R.append} but with argument order
         * reversed.
         */
        appendFlipped<T>(list: readonly T[], val: T): T[];
        appendFlipped<T>(list: readonly T[]): (val: T) => T[];

        /**
         * Returns true if the specified value is equal, in R.equals terms,
         * to at least one element of the given list or false otherwise.
         * Given list can be a string.
         *
         * Like {@link http://ramdajs.com/docs/#contains|R.contains} but with argument order reversed.
         */
        contained<T>(list: readonly T[], val: T): boolean;
        contained<T>(list: readonly T[]): (val: T) => boolean;
        included<T>(list: readonly T[], val: T): boolean; // alias
        included<T>(list: readonly T[]): (val: T) => boolean; // alias

        /**
         * Can be used as a way to compose multiple invokers together to form polymorphic functions,
         * or functions that exhibit different behaviors based on their argument(s).
         * Consumes dispatching functions and keep trying to invoke each in turn, until a non-nil value is returned.
         *
         * Accepts a list of dispatching functions and returns a new function.
         * When invoked, this new function is applied to some arguments,
         * each dispatching function is applied to those same arguments until one of the
         * dispatching functions returns a non-nil value.
         */
        dispatch(functions: readonly Function[]): Function;

        /**
         * Returns a new list with the item at the position `fromIdx` moved to the position `toIdx`.
         * If the `toIdx` is out of the `list` range, the item will be placed at the last position
         * of the `list`. When negative indices are provided, the behavior of the move is
         * unspecified.
         */
        move<T>(fromIdx: number, toIdx: number, list: readonly T[]): T[];
        move(fromIdx: number): <T>(toIdx: number, list: readonly T[]) => T[];
        move(fromIdx: number): {
            <T>(toIdx: number, list: readonly T[]): T[];
            (toIdx: number): <T>(list: readonly T[]) => T[];
        };

        /**
         * Returns the value of a number rounded to the nearest integer.
         */
        round(val: number): number;

        /**
         * Subtracts its first argument from its second argument.
         */
        subtractNum(subtrahend: number, minuend: number): number;
        subtractNum(subtrahend: number): (minuend: number) => number;

        /**
         * Returns the smallest integer greater than or equal to a given number.
         *
         * Note: ceil(null) returns integer 0 and does not give a NaN error.
         */
        ceil(val: number): number;

        /**
         * Returns the largest integer less than or equal to a given number.
         *
         * Note: floor(null) returns integer 0 and do not give a NaN error.
         */
        floor(val: number): number;

        /**
         * Returns the integer part of a number by removing any fractional digits.
         *
         */
        trunc(val: number): number;

        /**
         * Returns the sign of a number, indicating whether the number is positive, negative or zero.
         */
        sign(val: number): number;

        /**
         * Takes a generator function and returns an async function.
         * The async function returned is a curried function whose arity matches that of the generator function.
         *
         * Note: This function is handy for environments that does support generators but doesn't support async/await.
         */
        async(generatorFn: Function): Function;

        /**
         * Replace all substring matches in a string with a replacement.
         */
        replaceAll(searchValue: string | RegExp, replaceValue: string, str: string): string;
        replaceAll(searchValue: string | RegExp): (replaceValue: string, str: string) => string;
        replaceAll(searchValue: string | RegExp): {
            (replaceValue: string, str: string): string;
            (replaceValue: string): (str: string) => string;
        };

        /**
         * Escapes the RegExp special characters.
         */
        escapeRegExp(val: string): string;

        /**
         * Divides two numbers, where the second number is divided by the first number.
         */
        divideNum(divisor: number, dividend: number): number;
        divideNum(divisor: number): (dividend: number) => number;

        /**
         * Identity type.
         */
        Identity: Function;

        /**
         * Converts value to an array.
         */
        toArray<T>(iterable: ArrayLike<T> | Iterable<T>): T[];
        toArray<T extends Dictionary>(iterable: T): ValueOf<T>[];

        /**
         * Returns true if all items in the list are unique. `R.equals` is used to determine equality.
         */
        allUnique(list: readonly unknown[]): boolean;

        /**
         * Returns true if at least one item of the list is repeated. `R.equals` is used to determine equality.
         */
        notAllUnique(list: readonly unknown[]): boolean;

        /**
         * Removes whitespace from the beginning of a string
         */
        trimStart(value: string): string;
        trimLeft(value: string): string;

        /**
         * Removes whitespace from the end of a string.
         */
        trimEnd(value: string): string;
        trimRight(value: string): string;

        /**
         * Removes specified characters from the end of a string.
         */
        trimCharsEnd(chars: string, value: string): string;
        trimCharsEnd(chars: string): (value: string) => string;

        /**
         * Removes specified characters from the beginning of a string.
         */
        trimCharsStart(chars: string, value: string): string;
        trimCharsStart(chars: string): (value: string) => string;

        /**
         * The function pads the current string with a given string
         * (repeated, if needed) so that the resulting string reaches a given length.
         * The padding is applied from the end of the current string.
         */
        padCharsEnd(padString: string, targetLength: number, value: string): string;
        padCharsEnd(padString: string, targetLength: number): (value: string) => string;
        padCharsEnd(padString: string): (targetLength: number, value: string) => string;

        /**
         * The function pads the current string with an empty string
         * so that the resulting string reaches a given length.
         * The padding is applied from the end of the current string.
         */
        padEnd(targetLength: number, value: string): string;
        padEnd(targetLength: number): (value: string) => string;

        /**
         * The function pads the current string with a given string
         * (repeated, if needed) so that the resulting string reaches a given lenght.
         * The padding is applied to the start of the current string.
         */
        padCharsStart(padString: string, targetLength: number, value: string): string;
        padCharsStart(padString: string, targetLength: number): (value: string) => string;
        padCharsStart(padString: string): (targetLength: number, value: string) => string;

        /**
         * Pads string on the left side if it's shorter than length.
         */
        padStart(targetLength: number, value: string): string;
        padStart(targetLength: number): (value: string) => string;

        /**
         * Sort a list of objects by a list of props (if first prop value is equivalent, sort by second, etc).
         */
        sortByProps<T extends Dictionary, U extends keyof T>(props: readonly U[], list: readonly T[]): T[];
        sortByProps(props: readonly KeyTypes[]): <T extends Dictionary>(list: readonly T[]) => T[];

        /**
         * When given a number n and an array, returns an array containing every nth element.
         */
        skipTake<T>(n: number, list: readonly T[]): T[];
        skipTake(n: number): <T>(list: readonly T[]) => T[];

        /**
         * Invokes the method at path of object with given arguments.
         */
        invokeArgs(pathToMethod: readonly string[], args: readonly unknown[], obj: object): unknown;
        invokeArgs(pathToMethod: readonly string[], args: readonly unknown[]): (obj: object) => unknown;
        invokeArgs(pathToMethod: readonly string[]): (args: readonly unknown[], obj: object) => unknown;

        /**
         * Converts double-precision 64-bit binary format IEEE 754 to signed 32 bit integer number.
         */
        toInteger32(n: number): number;
        toInt32(n: number): number; // alias
    }
}

export = RA;
