const React = require("react");

class App extends React.Component {
	render() {
		return React.createElement("div", null,
			React.createElement("h1", null, "Hello!"),
			React.createElement("p", null, `
				This is react. Even though we don't have any elements on the page
				to start, React quickly fills in the javascript content.
			`),
		);
	}
}

module.exports = App;
