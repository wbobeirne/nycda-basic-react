const React = require("react");

class Countdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			number: props.start || 5,
		};

let	timer = setInterval(() => {
			if(this.state.number > 0){
			console.log(this.state.number);
			this.setState({
				number: this.state.number - 1,
			});
			} else {
			alert("Magic is here");	
		  clearInterval(timer);
			
		
			}
		}, 1000);
			alert("Magic is about to happen");
			
	  
	}

	render() {
		const { number } = this.state;
		return (<span>{number}</span>);

	}
}

module.exports = Countdown;

// const React = require("react");

// class Countdown extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			time: props.start || 5,
// 		};

// 		setInterval(() => {
// 			if (this.state.number === 0) {
// 				this.setState(() => {
// 					alert("Just Kidding");
// 				});
// 			} else
// 			{this.setState({
// 				time: this.state.number - 1,
// 			});}
// 		}, 1000);
// 	}
// 	render() {
// 		const { number } = this.state;
// 		return (
// 			<span>{number}</span>
// 		);
// 	}
// }

// module.exports = Countdown;