/**
 * Set of most useful js functions
 * Autor: Ilian Iliev
 *
 * Date: 27-04-2017
 */

(function (scope) {

    'use strict';

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



    // ----------------------------------------------------- //
    // ---------------- Basic type checking ---------------- //
    // ----------------------------------------------------- //

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
            return (typeof p).toLowerCase() === 'object' && p.constructor === Object;
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
        if (is.hasOwnProperty(type) && type !== 'not') {
            is.not[type] = new Function('p', 'return ! (' + is[type] + ')(p)');
        }
    }



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
    }

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
    // -------------------- String utils ------------------- //
    // ----------------------------------------------------- //

    function Strings() {}

    /**
     * Formated string
     */
    Strings.prototype.format = function (str, args) {
        args = Array.prototype.slice.call(arguments);
        str = args.shift();
        return str.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] !== 'undefined' ? args[number] : match;
        });
    };

    /**
     * Transforms to uppercase first letter of string
     */
    Strings.prototype.ucfirst = function (str) {
        if ((typeof str).toLowerCase() !== 'string') { return str; }
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
            for (var j = 0, len = results.length; j < len; j++) {
                results[j] = parseInt(results[j]);
            }
        }

        return results;
    };

    /**
     * Remove element from array
     */
    Arrays.prototype.removeElement = function (arr, el) {
        if (!arr || !arr.splice || arr.indexOf(el) === -1) return false;
        arr.splice(arr.indexOf(el), 1);
        return arr;
    };

    /**
     * Filter an array
     */
    Arrays.prototype.filter = function (arr, func) {
        var res = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (func.call(arr[i], arr[i], i, arr)) {
                res.push(arr[i]);
            }
        }
        return res;
    };



    // ----------------------------------------------------- //
    // -------------------- Iterators ---------------------- //
    // ----------------------------------------------------- //

    /**
     * Iterate over array
     */
    Handy.prototype.each = Handy.each = function (arr, func) {
        for (var i = 0 ; i < arr.length; i++) {
            func.call(arr[i], i);
        }
    };

    /**
     * Iterate over object
     */
    Handy.prototype.forIn = Handy.forIn = function (obj, func) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                func.call(obj[prop], prop);
            }
        }
    };



    // ----------------------------------------------------- //
    // ----------------- Timing functions ------------------ //
    // ----------------------------------------------------- //

    /**
     * Limits the rate at which a function can fire
     */
    Handy.prototype.debounce = Handy.debounce = function (func, guardTime) {

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
     * Debounce implementation with timeout
     */
    Handy.prototype.debounceTimeout = Handy.debounceTimeout = function (func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    /**
     * Return function, that can be called only once
     */
    Handy.prototype.once = Handy.once = function (fn, context) {
        var result;
        return function() {
            if (fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    };

    /**
     * Block the main thread for the specified amount of time
     */
    Handy.prototype.sleep = Handy.sleep = function (miliseconds) {
        var stopTime = +new Date() + miliseconds;
        while (stopTime >= +new Date()) { }
    };

    /**
     * Execute function after given time + chaining
     */
    Handy.prototype.after = Handy.after = function (t, fn) {

        var queue = [], self, timer;

        function schedule(t, fn) {
            var execute = function () {
                timer = null;
                fn();
                if (queue.length) {
                    var item = queue.shift();
                    schedule(item.t, item.fn);
                }
            };
            if (t > 0) {
                timer = setTimeout(execute, t);
            } else {
                execute();
            }
        }

        self = {
            after: function (t, fn) {
                if (queue.length || timer) {
                    queue.push({fn: fn, t: t});
                } else {
                    schedule(t, fn);
                }
                return self;
            },
            cancel: function () {
                clearTimeout(timer);
                queue = [];
            }
        };

        return self.after(t, fn);
    };

    // ----------------------------------------------------- //
    // --------------------- Others ------------------------ //
    // ----------------------------------------------------- //

    /**
     * Returns absolute url from string
     */
    Handy.prototype.getAbsoluteUrl = Handy.getAbsoluteUrl = (function() {
        var a;
        return function(url) {
            if (!a) a = document.createElement('a');
            a.href = url;
            return a.href;
        };
    })();

    /**
     * Validate if an element matches given selector
     */
    Handy.prototype.matchesSelector = Handy.matchesSelector = function (el, selector) {
        var p = Element.prototype;
        var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    };

    /**
     * Remove html tags from text
     */
    Handy.prototype.stripTags = Handy.stripTags = function (htmlstr) {
        var div = document.createElement('div');
        div.innerHTML = htmlstr;
        return div.textContent;
    };



    // ----------------------------------------------------- //
    // ----- Enable static usage of separate modules ------- //
    // ----------------------------------------------------- //

    Handy.ConvertBase = ConvertBase;
    Handy.is = is;

    Handy.Mathematics = Mathematics;
    Handy.Strings = Strings;
    Handy.Arrays = Arrays;



    scope.Handy = Handy;

}(this));
