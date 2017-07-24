const React = require("react");

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: props.start || 10,
		};

		setInterval(() => {
			if (this.state.time === 0) {
				this.setState(() => {
					alert("Just Kidding");
				});
			} else
			{this.setState({
				time: this.state.time - 1,
			});}
		}, 1000);
	}
	render() {
		const { time } = this.state;
		return (
			<span>{time}</span>
		);
	}
}

module.exports = Countdown;
