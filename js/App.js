const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Color = require("./components/Color");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="Nick.js"/>
				<Color/>
			</div>
		);
	}
}

module.exports = App;
