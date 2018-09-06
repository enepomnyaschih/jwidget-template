import Component from "jwidget/Component";

export default class Application extends Component {

	protected renderRoot(el: JQuery) {
		el.text("Hello, World!").addClass("application");
	}
}
