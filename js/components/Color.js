const React = require("react");

class Color extends React.Component {
	render() {
		return (
			<font size ={this.props.size} color= {this.props.color}>{this.props.children}</font>
		);
	}
}

module.exports = Color;
