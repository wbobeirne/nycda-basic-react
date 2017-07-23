const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Color = require("./components/Color");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library='will.js'/>
				<Color>Test</Color>
			</div>
		);
	}
}


module.exports = App;
