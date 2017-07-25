const React = require("react");
const App = require("../App.js");

// const onZero = this.props.onZero;

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			number: props.start || 60,
		};

		setInterval(() => {
			if (this.state.number <= 0) {
				props.onZero();
			}
			this.setState({
				number: this.state.number - 1,
			});
		}, 1000);
	}

	render() {
		const { number } = this.state;

		return (
			<span>{number}</span>
		);
	}
}

module.exports = Counter;
