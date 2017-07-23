const React = require("react");

class Textcolor extends React.Component {
	render() {
		return (
			<font size="3" color="red">{this.props.children}</font>

		);
	}
}

module.exports = Textcolor;
