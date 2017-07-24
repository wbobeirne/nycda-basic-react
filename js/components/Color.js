const React = require("react");

class Color extends React.Component {
	render() {
		return (
			<font color={this.props.color} size={this.props.size} className="app-font">{this.props.children}</font>
		);
	}
}


module.exports = Color;
