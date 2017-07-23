const React = require("react");

class Textcolor extends React.Component {
	render() {
		const size = this.props.size;
		const color = this.props.color;
		return (
			<font className = "textcolor" size = {size} color = {color}>
				{this.props.children}</font>

		);
	}
}

module.exports = Textcolor;
