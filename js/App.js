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
				<Font color="purple">Bob Law Bob Blog</Font>
			</div>
		);
	}
}

module.exports = App;
