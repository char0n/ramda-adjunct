declare var RA: RamdaAdjunct.Static;

declare namespace RamdaAdjunct {

    export interface Static {

       /**
        * Checks if input value is `Array`
        */
       isArray(val: any): val is Array<any>;

       /**
        * Checks if input `value` is `Boolean
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

    }

}

export = RA;
