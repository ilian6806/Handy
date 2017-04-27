
/**
 * Custom tests and logging.
 * Left this in global scope to be able to test in console. 
 */
log = function (m) {
    var d = document.createElement('div');
    if (m instanceof Object) {
        d.innerText = JSON.stringify(m);
    } else {
        d.innerText = m;
        if (!! m) {
            d.innerText += ' === ' + JSON.stringify(eval(m)) + ';'
        }
    }
    document.body.appendChild(d);
    d = null;
};

var _ = new Handy();

_.each([
    [
        '_.math.clip(8, 10, 12)',
        '_.math.rand(10, 30)',
    ], [
        '_.str.ucfirst("first letter is not uppercase")',
        '_.str.format("This is {0} with {1} placeholders", "string", 2)',
        '_.str.pad(34, 4)',
    ], [
        '_.arr.find([3, 5, 7, 8], 5)',
        '_.arr.indexOf([3, 5, 7, 8], 5)',
        '_.arr.removeDuplicates([3, 5, 5, 5, 7, 8, 8])',
        '_.arr.removeElement([3, 5, 7, 8, 6, 6, 6], 6)',
    ], [
        '_.is.number(2)',
        '_.is.string("2")',
        '_.is.array([1, 2, 3])',
        '_.is.object({})',
        '_.is.func(function () {})',
        '_.is.htmlElement(document.body)',
        '_.is.undefined(window.blabla)',
    ], [
        '_.is.not.number(2)',
        '_.is.not.string("2")',
        '_.is.not.array([1, 2, 3])',
        '_.is.not.object({})',
        '_.is.not.func(function () {})',
        '_.is.not.htmlElement(document.body)',
        '_.is.not.undefined(window.blabla)',
    ], [
        '_.each([2, 4], function () { log(this) })',
        '_.forIn({ n: 2, m: 4 }, function () { log(this); })',
    ]
], function () {
    log('');
    _.each(this, function () {
        log(this.toString());
        log(this.toString());
        log(this.toString());
        log(this.toString());
    });
});
