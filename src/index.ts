import "es6-promise/auto";
import "jquery";
import Application from "./Application";

$(function() {
	new Application().renderTo("body");
});
