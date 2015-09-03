// Use from main
import * as root from "ts-npm-module";

var foo = root.foo;
var Bar = root.Bar;
var bas = root.bas;

// Or any of the other files within the module
import {foo as deepFoo} from "ts-npm-module/js/deep/foo";
import {Bar as deepBar} from "ts-npm-module/js/deep/deeper/bar";

foo = deepFoo;
Bar = deepBar;