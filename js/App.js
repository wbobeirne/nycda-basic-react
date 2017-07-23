const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const colorTag = require("./components/colorTag");

class App extends React.Component {
	render() {
		const libName = "React";

		return (
			<div className="app">
				<Title>Yo this be a test</Title>
				<Description library="React"/>
				<colorTag>Color Text</colorTag>
			</div>
		);
	}
}

module.exports = App;
