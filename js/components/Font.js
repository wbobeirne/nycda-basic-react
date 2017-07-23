const React = require("react");

class Font extends React.Component {
	render() {
		const color = this.props.color;

		return (
			<font className = "font" color={color}>{this.props.children}</font>
		);
	}
}

module.exports = Font;
