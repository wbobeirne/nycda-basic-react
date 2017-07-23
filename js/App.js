const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Counter = require("./components/Counter");
const Countdown = require("./components/Countdown");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<p>
					You have been on my site for <Counter start={0}/> seconds
				</p>
				<p>
					You only have <Countdown start={10}/> seconds!!
				</p>
			</div>
		);
	}
}

module.exports = App;
