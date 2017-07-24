const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Counter = require("./components/Counter");
const Color = require("./components/Color");
const Countdown = require("./components/Countdown");


class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="Nick.js"/>
				<Color color="blue" size="5">This Is My Cool Font Thing</Color>
				<p>
					You have been on my site for <Counter start={0}/> seconds
				</p>
				<p>Whatchout in <Countdown start={7}/> it's gonna explode
				</p>
			</div>
		);
	}
}

module.exports = App;
