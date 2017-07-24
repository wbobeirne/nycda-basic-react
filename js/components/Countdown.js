const React = require("react");

class Countdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			number: props.start || 5,
		};

		const down = setInterval(() => {
			if (this.state.number > 0) {
				this.setState({ number: this.state.number -1 });
			}
			else {
				alert("Get out of here!");
				clearInterval(down);
			}
		}, 1000);
	}

	render(){
		const { number } = this.state;

		return (
			<span>{number}</span>
		);
}
}
module.exports = Countdown;
