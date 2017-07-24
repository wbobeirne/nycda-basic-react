const React = require("react");

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			number: props.start || 0,
		};

		setInterval(() => {
			this.setState({
				number: this.state.number + 1,
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

