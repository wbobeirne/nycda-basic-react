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
				<Color color="blue" size="5">This Is My Cool Font Thing</Color>
			</div>
		);
	}
}

module.exports = App;
