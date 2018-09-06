import "es6-promise/auto";
import "script-loader!jquery";
import "./index.styl"

import Application from "./Application";

$(function() {
	new Application().renderTo("body");
});
