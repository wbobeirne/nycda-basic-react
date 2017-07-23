const React = require("react");

class Font extends React.Component {
	render() {
		return (
			<font color={this.props.color} size={this.props.size}>{this.props.children}</font>
		);
	}
}

module.exports = Font;