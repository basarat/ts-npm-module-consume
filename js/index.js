var root = require("ts-npm-module");
var foo = root.foo;
var Bar = root.Bar;
var bas = root.bas;
var foo_1 = require("ts-npm-module/js/deep/foo");
var bar_1 = require("ts-npm-module/js/deep/deeper/bar");
foo = foo_1.foo;
Bar = bar_1.Bar;
