const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Textcolor = require("./components/Textcolor");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<Textcolor> This is some text!</Textcolor>
			</div>
		);
	}
}

module.exports = App;
