const React = require("react");

class fontColor extends React.Component {
	render() {
		const face = this.props.face;
		const color = this.props.color;
		const size = this.props.size;


		return (
			<font className = "app-colorFont" face= {face} size = {size} color = {color}>This is the new official React font!</font>
		);
	}
}

module.exports = fontColor;
