const React = require("react");

class App extends React.Component {
	render() {
		const libName = "React";

		return (
			<div className="app">
				<h1 className="app-title">Hello!</h1>
				<p className="app-description">
					This is {libName}. Even though we don’t have any elements
					on the page to start, {libName} quickly fills in the
					javascript content.
				</p>
			</div>
		);
	}
}

module.exports = App;
