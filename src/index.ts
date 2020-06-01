import "core-js/stable";
import "regenerator-runtime/runtime";
import "./index.styl"

import $ from "jquery";
import Application from "./Application";

$(function() {
	new Application().renderTo("body");
});
