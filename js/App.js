const React = require("react");

class App extends React.Component {
	render() {
		const libName = "React";

		return React.createElement("div", { className: "app" },
			React.createElement("h1", { className: "app-title" }, "Hello!"),
			React.createElement("p", { className: "app-text" }, `
				This is ${libName}. Even though we don't have any elements on the page
				to start, ${libName} quickly fills in the javascript content.
			`),
		);
	}
}


module.exports = App;
