const React = require("react");
const Title = require("./components/Title");
const Font = require("./components/Font");
const Description = require("./components/Description");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<Font color="blue" size="3">Render this text</Font>
			</div>
		);
	}
}

module.exports = App;
