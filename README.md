# Handy
Set of useful js functions


```javascript
var _ = new Handy();

_.math.clip(8, 10, 12) === 10;
_.math.rand(10, 30) === 17;

_.str.ucfirst("first letter is not uppercase") === "First letter is not uppercase";
_.str.format("This is {0} with {1} placeholders", "string", 2) === "This is string with 2 placeholders";
_.str.pad(34, 4) === "0034";

_.arr.find([3, 5, 7, 8], 5) === true;
_.arr.indexOf([3, 5, 7, 8], 5) === 1;
_.arr.removeDuplicates([3, 5, 5, 5, 7, 8, 8]) === [3,5,7,8];
_.arr.removeElement([3, 5, 7, 8, 6, 6, 6], 6) === [3,5,7,8,6,6];
_.arr.filter([3, 5, 7, 8], function (el) { return el < 6; }) === [3,5];

_.is.number(2) === true;
_.is.string("2") === true;
_.is.array([1, 2, 3]) === true;
_.is.object({}) === true;
_.is.func(function () {}) === true;
_.is.htmlElement(document.body) === true;
_.is.undefined(window.blabla) === true;

_.is.not.number(2) === false;
_.is.not.string("2") === false;
_.is.not.array([1, 2, 3]) === false;
_.is.not.object({}) === false;
_.is.not.func(function () {}) === false;
_.is.not.htmlElement(document.body) === false;
_.is.not.undefined(window.blabla) === false;

_.conv("011").from(2).to(10) === "3";
_.conv.bin2dec("011") === "3";
_.conv.dec2hex("26") === "1a";
_.conv.hex2bin("f9") === "11111001";
_.conv.dec2bin("11") === "1011";

_.debounce(function () {}, 500) === undefined;
_.sleep(5) === undefined;
_.after(1, function () { }).after(3, function () { }) === {};

_.each([2, 4], function () { /* log(this); */ }) === undefined;
_.forIn({ n: 2, m: 4 }, function () { /* log(this); */ }) === undefined;

// load only needed modules
var myMath = new Handy.Mathematics(); myMath.rand(10, 30); === 29;
var myStr = new Handy.Strings(); myStr.pad(34, 4); === "0034";
var myArr = new Handy.Arrays(); myArr.indexOf([3, 5, 7, 8], 5); === 1;
var myConv = Handy.ConvertBase; myConv.dec2bin("11"); === "1011";
var myIs = Handy.is; myIs.number("11"); === false;

// static usage
Handy.debounce(function () {}, 500) === undefined;
Handy.sleep(5) === undefined;
Handy.after(1, function () { }).after(3, function () { }) === {};
Handy.each([2, 4], function () { /* log(this); */ }) === undefined;
Handy.forIn({ n: 2, m: 4 }, function () { /* log(this); */ }) === undefined;
```
