const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
			</div>
		);
	}
}

module.exports = App;
