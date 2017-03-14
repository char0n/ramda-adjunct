declare var RA: RamdaAdjunct.Static;

declare namespace RamdaAdjunct {

    export interface Static {
        /**
         * Checks if input value is `Array`
         */
        isArray(val: any): val is Array<any>;

        /**
         * Checks if input value is `Boolean
         */
        isBoolean(val: any): val is Boolean;

        /**
         * Returns `true` if the given value is its type's empty value, `null` or `undefined`
         */
        isNilOrEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `Array`
         */
        isNotArray(val: any): boolean;

        /**
         * Checks if input value is complement of `Boolean`
         */
        isNotBoolean(val: any): boolean;

        /**
         * Returns true if the given value is not its type's empty value; `false` otherwise.
         */
        isNotEmpty(val: any): boolean;

        /**
         * Checks if input value is complement of `null` or `undefined`
         */
        isNotNil(val: any): boolean;

        /**
         * Checks if input value is complement of `null`
         */
        isNotNull(val: any): boolean;

        /**
         * Checks if input value is complement of `String`
         */
        isNotString(val: any): boolean;

        /**
         * Checks if input value is complement `undefined`
         */
        isNotUndefined(val: any): boolean;

        /**
         * Checks if input value is `null`
         */
        isNull(val: any): val is null;

        /**
         * Checks if input value is `String`
         */
        isString(val: any): val is String;

        /**
         * Checks if input value is `undefined`
         */
        isUndefined(val: any): val is undefined;

        /**
         * Tests whether or not an object is similar to an array.
         */
        isNotArrayLike(val: any): boolean;

        /**
         * Checks if input value is `Generator Function`
         */
        isGeneratorFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Generator Function`
         */
        isNotGeneratorFunction(val: any): boolean;

        /**
         * Checks if input value is `Async Function`
         */
        isAsyncFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Async Function`
         */
        isNotAsyncFunction(val: any): boolean;

        /**
         * Checks if input value is `Function`
         */
        isFunction(val: any): boolean;

        /**
         * Checks if input value is complement of `Function`
         */
        isNotFunction(val: any): boolean;

        /**
         * Checks if input value is language type of `Object`
         */
        isObject(val: any): val is Object;

        /**
         * Checks if input value is complement of language type of `Object`
         */
        isNotObject(val: any): boolean;

        /**
         * Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isObjectLike(val: any): boolean;

        /**
         * Checks if value is not object-like. A value is object-like if it's not null and has a typeof result of "object".
         */
        isNotObjectLike(val: any): boolean;

        /**
         * Check to see if an object is a plain object (created using `{}`, `new Object()` or `Object.create(null)`)
         */
        isPlainObject(val: any): boolean

        /**
         * Check to see if an object is not a plain object (created using `{}`, `new Object()` or `Object.create(null)`)
         */
        isNotPlainObject(val: any): boolean

        /**
         * Checks if value is `Date` object.
         */
        isDate(val: any): val is Date

        /**
         * Checks if value is complement of `Date` object
         */
        isNotDate(val: any): boolean

        /**
         * Checks whether the passed value is `NaN` and its type is `Number`.
         * It is a more robust version of the original, global isNaN().
         */
        isNaN(val: any): boolean
    }

}

export = RA;
