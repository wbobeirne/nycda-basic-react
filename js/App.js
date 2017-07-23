const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const FontColor = require("./components/FontColor");


class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<FontColor color="red"/>
			</div>
		);
	}
}

module.exports = App;
