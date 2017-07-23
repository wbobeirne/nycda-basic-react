const React = require("react");

class Font extends React.Component {
	render() {
		return (
			<font color="green">{this.props.children}</font>
		);
	}
}

module.exports = Font;
