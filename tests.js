/**
 * Custom tests and logging.
 * Left this in global scope to be able to test in console. 
 */
writeLine = function (m, doEval) {
    var d = document.createElement('div');
    if (m instanceof Object) {
        d.innerHTML = JSON.stringify(m);
    } else {
        d.innerHTML = m;
        if (doEval && !! m) {
            d.innerHTML += ' === ' + JSON.stringify(eval(m)) + ';'
        }
    }
    document.body.appendChild(d.toCode());
    d = null;
};

writeComment = function (m) {
    var d = document.createElement('span');
    d.innerHTML = m;
    d.className = 'comment';
    document.body.appendChild(d);
    d = null;
};

// Make it looks more like a code :)
HTMLElement.prototype.toCode = function () {

    this.innerHTML = this.innerHTML
        .replace(/([\"\'])(.*?(?:(\\"|\\').*?\3.*?)*?)\1/g, '<span class="yellow">$&</span>')
        .replace(/var|this|window|document|body|function/g, '<span class="lightblue">$&</span>')
        .replace(/new|return|===/g, '<span class="red">$&</span>')
        .replace(/ undefined|null|true|false/g, '<span class="blue">$&</span>')

    return this;
};


var _ = new Handy();


(function (commands) {

    var animationOn = true;

    var scrollElement = document.scrollElement || document.documentElement;

    var initialDelay = animationOn ? 600 : 0;
    var commandsDelay = animationOn ? 100 : 0;

    var queue = _.after(0, function () {
        writeComment('/**<br/>&nbsp;* Set of useful js functions<br/>&nbsp;*/<br/><br/>');
    }).after(initialDelay, function () {
        writeLine('var _ = new Handy();');
    });

    queue.after(initialDelay, function () {

        _.each(commands, function () {

            queue.after(commandsDelay, function () {
                writeLine('');
            });

            _.each(this, function () {
                var command = this.toString();
                queue.after(commandsDelay, function () {
                    if (command.slice(0, 2) == '//') {
                        writeComment(command);
                    } else {
                        writeLine(command, true);
                    }
                    if (animationOn) {
                        scrollElement.scrollTop = document.body.scrollHeight;
                        document.body.scrollTop = document.body.scrollHeight; // chrome...
                    }
                });
            });
        });
    });
}([
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
        '_.arr.filter([3, 5, 7, 8], function (el) { return el < 6; })',
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
        '_.conv("011").from(2).to(10)',
        '_.conv.bin2dec("011")',
        '_.conv.dec2hex("26")',
        '_.conv.hex2bin("f9")',
        '_.conv.dec2bin("11")',
    ], [
        '_.debounce(function () {}, 500)',
        '_.sleep(5)',
        '_.after(1, function () { }).after(3, function () { })',
    ], [
        '_.each([2, 4], function () { /* log(this); */ })',
        '_.forIn({ n: 2, m: 4 }, function () { /* log(this); */ })',
    ], [
        '// load only needed modules',
        'var myMath = new Handy.Mathematics(); myMath.rand(10, 30);',
        'var myStr  = new Handy.Strings();     myStr.pad(34, 4);',
        'var myArr  = new Handy.Arrays();      myArr.indexOf([3, 5, 7, 8], 5);',
        'var myConv = Handy.ConvertBase;       myConv.dec2bin("11");',
        'var myIs   = Handy.is;                myIs.number("11");',
    ], [
        '// static usage',
        'Handy.debounce(function () {}, 500)',
        'Handy.sleep(5)',
        'Handy.after(1, function () { }).after(3, function () { })',
        'Handy.each([2, 4], function () { /* log(this); */ })',
        'Handy.forIn({ n: 2, m: 4 }, function () { /* log(this); */ })',
    ]
]));
