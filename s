warning: CRLF will be replaced by LF in .codeclimate.yml.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in Gruntfile.js.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in src/handy.js.
The file will have its original line endings in your working directory.
[1mdiff --git a/.codeclimate.yml b/.codeclimate.yml[m
[1mindex fbbf0d8..795ed43 100644[m
[1m--- a/.codeclimate.yml[m
[1m+++ b/.codeclimate.yml[m
[36m@@ -11,13 +11,25 @@[m [mengines:[m
         enabled: false[m
       no-new-func:[m
         enabled: false[m
[32m+[m[32m      max-statements:[m
[32m+[m[32m        enabled: false[m
       radix:[m
         enabled: false[m
[32m+[m[32m      wrap-iife:[m
[32m+[m[32m        enabled: false[m
[32m+[m[32m      no-eval:[m
[32m+[m[32m        enabled: false[m
   csslint:[m
     enabled: true[m
     checks:[m
       overqualified-elements:[m
         enabled: false[m
[32m+[m[32m      errors:[m
[32m+[m[32m        enabled: false[m
[32m+[m[32m      text-indent:[m
[32m+[m[32m        enabled: false[m
[32m+[m[32m      box-sizing:[m
[32m+[m[32m        enabled: false[m
   fixme:[m
     enabled: true[m
 ratings:[m
[1mdiff --git a/Gruntfile.js b/Gruntfile.js[m
[1mindex db8f67a..37bc484 100644[m
[1m--- a/Gruntfile.js[m
[1m+++ b/Gruntfile.js[m
[36m@@ -23,7 +23,7 @@[m [mmodule.exports = function(grunt) {[m
                             ' */\n'[m
                 }[m
             }[m
[31m-        },[m
[32m+[m[32m        }[m
     });[m
 [m
     grunt.loadNpmTasks('grunt-contrib-uglify');[m
[1mdiff --git a/src/handy.js b/src/handy.js[m
[1mindex a29e9f2..efafd90 100644[m
[1m--- a/src/handy.js[m
[1m+++ b/src/handy.js[m
[36m@@ -40,7 +40,7 @@[m
             return p instanceof Array;[m
         },[m
         object: function (p) {[m
[31m-            return (typeof p).toLowerCase() === 'object' && p.constructor == Object;[m
[32m+[m[32m            return (typeof p).toLowerCase() === 'object' && p.constructor === Object;[m
         },[m
         func: function (p) {[m
             return !!(p && p.constructor && p.call && p.apply);[m
[36m@@ -76,7 +76,7 @@[m
                 };[m
             }[m
         };[m
[31m-    };[m
[32m+[m[32m    }[m
 [m
     // binary to decimal[m
     ConvertBase.bin2dec = function (num) {[m
[36m@@ -145,7 +145,7 @@[m
         args = Array.prototype.slice.call(arguments);[m
         str = args.shift();[m
         return str.replace(/{(\d+)}/g, function(match, number) {[m
[31m-            return typeof args[number] != 'undefined' ? args[number] : match;[m
[32m+[m[32m            return typeof args[number] !== 'undefined' ? args[number] : match;[m
         });[m
     };[m
 [m
[1mdiff --git a/styles.css b/styles.css[m
[1mindex ec64a4b..d398fb6 100644[m
[1m--- a/styles.css[m
[1m+++ b/styles.css[m
[36m@@ -17,7 +17,7 @@[m [mhtml {[m
 }[m
 [m
 .sublime br::selection,[m
[31m-.sublime div::selection, [m
[32m+[m[32m.sublime div::selection,[m
 .sublime span::selection {[m
     background: #383830;[m
 }[m
[36m@@ -51,10 +51,11 @@[m [mhtml {[m
     content: "|";[m
     color: white;[m
     -webkit-animation: blink 1.5s infinite;[m
[32m+[m[32m    -moz-animation: blink 1.5s infinite;[m
     animation: blink 1.5s infinite;[m
 }[m
 [m
[31m-@-keyframes 'blink' {[m
[32m+[m[32m@keyframes 'blink' {[m
     0% { opacity:0 }[m
     25% { opacity:1 }[m
     50% { opacity: 1 }[m
[36m@@ -163,37 +164,37 @@[m [mhtml {[m
     border-color: rgba(255, 255, 255, 0.7);[m
 }[m
 [m
[31m-.github-fork-ribbon.left-top, [m
[32m+[m[32m.github-fork-ribbon.left-top,[m
 .github-fork-ribbon.left-bottom {[m
     right: auto;[m
     left: 0;[m
 }[m
 [m
[31m-.github-fork-ribbon.left-bottom, [m
[32m+[m[32m.github-fork-ribbon.left-bottom,[m
 .github-fork-ribbon.right-bottom {[m
     top: auto;[m
     bottom: 0;[m
 }[m
 [m
[31m-.github-fork-ribbon.left-top:before, [m
[32m+[m[32m.github-fork-ribbon.left-top:before,[m
 .github-fork-ribbon.left-top:after,[m
[31m-.github-fork-ribbon.left-bottom:before, [m
[32m+[m[32m.github-fork-ribbon.left-bottom:before,[m
 .github-fork-ribbon.left-bottom:after {[m
     right: auto;[m
     left: -3.23em;[m
 }[m
 [m
[31m-.github-fork-ribbon.left-bottom:before, [m
[32warning: CRLF will be replaced by LF in styles.css.
The file will have its original line endings in your working directory.
m+[m[32m.github-fork-ribbon.left-bottom:before,[m
 .github-fork-ribbon.left-bottom:after,[m
[31m-.github-fork-ribbon.right-bottom:before, [m
[32m+[m[32m.github-fork-ribbon.right-bottom:before,[m
 .github-fork-ribbon.right-bottom:after {[m
     top: auto;[m
     bottom: 3.23em;[m
 }[m
 [m
[31m-.github-fork-ribbon.left-top:before, [m
[31m-.github-fork-ribbon.left-top:after, [m
[31m-.github-fork-ribbon.right-bottom:before, [m
[32m+[m[32m.github-fork-ribbon.left-top:before,[m
[32m+[m[32m.github-fork-ribbon.left-top:after,[m
[32m+[m[32m.github-fork-ribbon.right-bottom:before,[m
 .github-fork-ribbon.right-bottom:after {[m
     -webkit-transform: rotate(-45deg);[m
     -moz-transform: rotate(-45deg);[m
[1mdiff --git a/tests.js b/tests.js[m
[1mindex 3280d36..a324162 100644[m
[1m--- a/tests.js[m
[1m+++ b/tests.js[m
[36m@@ -1,6 +1,6 @@[m
 /**[m
  * Custom tests and logging.[m
[31m- * Left this in global scope to be able to test in console. [m
[32m+[m[32m * Left this in global scope to be able to test in console.[m
  */[m
 writeLine = function (m, doEval) {[m
     var d = document.createElement('div');[m
[36m@@ -10,7 +10,7 @@[m [mwriteLine = function (m, doEval) {[m
         d.innerHTML = m;[m
         var result = JSON.stringify(eval(m));[m
         if (doEval && !! m) {[m
[31m-            if (result == undefined) {[m
[32m+[m[32m            if (result === undefined) {[m
                 d.innerHTML += ';'[m
             } else {[m
                 d.innerHTML += ' === ' + result + ';'[m
[36m@@ -71,7 +71,7 @@[m [mvar _ = new Handy();[m
             _.each(this, function () {[m
                 var command = this.toString();[m
                 queue.after(commandsDelay, function () {[m
[31m-                    if (command.slice(0, 2) == '//') {[m
[32m+[m[32m                    if (command.slice(0, 2) === '//') {[m
                         writeComment(command);[m
                     } else {[m
                         writeLine(command, true);[m
warning: CRLF will be replaced by LF in tests.js.
The file will have its original line endings in your working directory.
