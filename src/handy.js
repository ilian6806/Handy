/**
 * Set of most useful js functions
 * Autor: Ilian Iliev
 * 
 * Date: 27-04-2017
 */
 
(function (scope) {

    'use strict';

    /**
     * Basic type checking
     */
    var is = {
        number: function (p) {
            return (typeof p).toLowerCase() === 'number';
        },
        string: function (p) {
            return (typeof p).toLowerCase() === 'string';
        },
        array: function (p) {
            return p instanceof Array;
        },
        object: function (p) {
            return (typeof p).toLowerCase() === 'object' && p.constructor == Object;
        },
        func: function (p) {
            return !!(p && p.constructor && p.call && p.apply);
        },
        htmlElement: function (p) {
            return p instanceof HTMLElement;
        },
        undefined: function (p) {
            return [undefined, null, 'undefined', 'null'].indexOf(p) > -1;
        },
        not: {}
    };

    for (var type in is) {
        if (is.hasOwnProperty(type) && type != 'not') {
            is.not[type] = new Function('p', 'return ! (' + is[type] + ')(p)');
        }
    }



    // ----------------------------------------------------- //
    // -------------------- Math utils --------------------- //
    // ----------------------------------------------------- //

    function Mathematics() { }

    /**
     * Returns number in range
     */
    Mathematics.prototype.clip = function (num, min, max) {
        return Math.max(min, Math.min(num, max));
    };

    /**
     * Return random integer in range
     */
    Mathematics.prototype.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };



    // ----------------------------------------------------- //
    // -------------------- Converters --------------------- //
    // ----------------------------------------------------- //

    function ConvertBase(num) {
        return {
            from: function (baseFrom) {
                return {
                    to: function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };

    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };

    // decimal to binary
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };

    // hexadecimal to binary
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };



    // ----------------------------------------------------- //
    // -------------------- String utils ------------------- //
    // ----------------------------------------------------- //
    
    function Strings() {}

    /**
     * Formated string
     */
    Strings.prototype.format = function (str, args) {
        var args = Array.prototype.slice.call(arguments);
        var str = args.shift();
        return str.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };

    /**
     * Transforms to uppercase first letter of string
     */
    Strings.prototype.ucfirst = function (str) {
        if ((typeof str).toLowerCase() != 'string') { return str; }
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    /**
     * Format numbers < 10 like '01', '02' etc.
     */
    Strings.prototype.pad = function (str, length, value) {
        length = length || 2;
        value = value || '0';
        return String(Array(length).join(value) + String(str)).slice(-length);
    };



    // ----------------------------------------------------- //
    // -------------------- Array utils -------------------- //
    // ----------------------------------------------------- //
    
    function Arrays() {}

    /**
     * Check if array includes an element
     */
    Arrays.prototype.find = function (arr, el) {
        return arr.indexOf(el) > -1;
    };

    /**
     * Array.prototype.indexOf dont work fine with objects references
     */
    Arrays.prototype.indexOf = function (arr, el) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].toString() === el.toString()) return i;
        }
        return -1;
    };

    /**
     * Remove duplicates from array
     */
    Arrays.prototype.removeDuplicates = function (arr) {

        var results = [];
        var isIntArr = arr.length && is.number(arr[0]);

        for (var i = arr.length - 1; i >= 0; i--) {
            results[arr[i]] = null;
        }

        results = Object.keys(results);

        if (isIntArr) {
            for (var i = 0, len = results.length; i < len; i++) {
                results[i] = parseInt(results[i]);
            }
        }

        return results;
    };

    /**
     * Remove element from array
     */
    Arrays.prototype.removeElement = function (arr, el) {
        if (!arr || !arr.splice || arr.indexOf(el) == -1) return false;
        arr.splice(arr.indexOf(el), 1);
        return arr;
    };

    /**
     * Filter an array
     */
    Arrays.prototype.filter = function (arr, func) {
        var res = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (func.call(null, arr[i], i, arr)) {
                res.push(arr[i]);
            }
        }
        return res;
    };


    // -----------------------------------------------------//
    // ----------------- Main constructor ------------------//
    // -----------------------------------------------------//

    function Handy() {

        this.conv = ConvertBase;
        this.is = is;

        this.math = new Mathematics();
        this.str = new Strings();
        this.arr = new Arrays();
    }

    /**
     * Iterate over array
     */
    Handy.prototype.each = function (arr, func) {
        for (var i = 0 ; i < arr.length; i++) {
            func.call(arr[i], i);
        }
    };

    /**
     * Iterate over object
     */
    Handy.prototype.forIn = function (obj, func) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                func.call(obj[prop], prop);
            }
        }
    };

    /**
     * Limits the rate at which a function can fire
     */
    Handy.prototype.debounce = function (func, guardTime) {

        var last = 0;
        var time = guardTime || 100

        return function () {
            var now = +new Date();
            if (!last || (now - last) > time) {
                last = now;
                return func.apply(this, arguments);
            }
        };
    };

    /**
     * Block the main thread for the specified amount of time
     */
    Handy.prototype.sleep = function (miliseconds) {
        var stopTime = +new Date() + miliseconds;
        while (stopTime >= +new Date()) { };
    };

    scope.Handy = Handy;

}(this));