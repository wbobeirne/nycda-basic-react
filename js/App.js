const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Font = require("./components/Font");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<Font color="blue" size="8">Here I am</Font>
			</div>
		);
	}
}

module.exports = App;
