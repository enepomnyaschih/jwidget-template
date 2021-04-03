import Component from "jwidget/Component";
import template from "jwidget/template";

@template(require("./Application.jw.html"))
export default class Application extends Component {

	protected renderRoot(el: JQuery) {
		el.text("Hello, World!");
	}
}
