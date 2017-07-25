const React = require("react");
const Title = require("./components/Title");
const Description = require("./components/Description");
const ColorFont = require("./components/colorFont");
const Counter = require("./components/Counter");



class App extends React.Component {
	render() {
		const onZero = function() {
			alert("You've spent too much time on this page!!");
		};

		return (
			<div className="app">
				<Title>Test Title</Title>
				<Description library="will.js"/>
				<ColorFont face="Helvetica" size = {20} color = "green"/>
				<p>
						You have <Counter onZero={onZero} start={10}/>  seconds left on my site.
				</p>
			</div>
		);
	}
}

module.exports = App;
