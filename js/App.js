const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const ColorFont = require("./components/colorFont");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<ColorFont face="Helvetica" size = {20} color = "green"/>
				</div>
		);
	}
}

module.exports = App;
