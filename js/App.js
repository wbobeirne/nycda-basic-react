const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const ColorTag = require("./components/ColorTag");

class App extends React.Component {
	render() {
		const libName = "React";

		return (
			<div className="app">
				<Title>Yo this be a test</Title>
				<Description library="React"/>
				<ColorTag color = "purple" size = "4"> Rendering this color text</ColorTag>
			</div>
		);
	}
}

module.exports = App;
