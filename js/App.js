const React = require("react");
const Title = require("./components/Title");
const Font = require("./components/Font");
const Description = require("./components/Description");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>String</Title>
				<Description library="React"/>
				<Font color="red" size="10">Render this text</Font>
			</div>
		);
	}
}

module.exports = App;
