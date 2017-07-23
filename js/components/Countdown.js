const React = require("react");

class Countdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.start || 10,
		};

		this.timer = () => {
			if (this.state.count > 0) {
				this.setState({
					count: this.state.count - 1,
				});
				console.log(this.state.count);
			}	
			else {

				alert("We're all going to die!");
				clearInterval(this.interval);
			}
		}

		this.interval = setInterval(this.timer, 1000);

}


	render() {
		const { count } = this.state;

		return (
			<span>{count}</span>
		);
	}
}

module.exports = Countdown;
