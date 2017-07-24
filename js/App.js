const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const Font = require("./components/Font");
const Counter = require("./components/Counter");

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<Font color="blue" size="8">Here I am</Font>


				<p>
					You have been on my site for <Counter start={0}/> seconds
				</p>

				<Font color="blue" size="8">Here I am</Font>

			</div>
		);
	}
}

module.exports = App;
