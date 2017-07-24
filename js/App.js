const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Font = require("./components/Font");
const Counter = require("./components/Counter");
const Countdown = require("./components/Countdown");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<Font color="purple">Bob Law Bob Blog (Arrested Development Ref)</Font>
<p>
				{/* You've been on this page for <Counter start={0}/> seconds */}
</p>

<p>
			You need to boot this page in <Countdown start={5}/> seconds
</p>
			</div>
		);
	}
}

module.exports = App;
