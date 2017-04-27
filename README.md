# Handy
Set of useful js functions


```javascript
var _ = new Handy();

_.math.clip(8, 10, 12) === 10;
_.math.rand(10, 30) === 13;

_.str.ucfirst("first letter is not uppercase") === "First letter is not uppercase";
_.str.format("This is {0} with {1} placeholders", "string", 2) === "This is string with 2 placeholders";
_.str.pad(34, 4) === "0034";

_.arr.find([3, 5, 7, 8], 5) === true;
_.arr.indexOf([3, 5, 7, 8], 5) === 1;
_.arr.removeDuplicates([3, 5, 5, 5, 7, 8, 8]) === [3,5,7,8];
_.arr.removeElement([3, 5, 7, 8, 6, 6, 6], 6) === [3,5,7,8,6,6];

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

2
4
_.each([2, 4], function () { log(this) }) === undefined;
2
4
_.forIn({ n: 2, m: 4 }, function () { log(this); }) === undefined;
```
