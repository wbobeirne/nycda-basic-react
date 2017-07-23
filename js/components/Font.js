const React = require("react");
const PropTypes = require("prop-types");


class Font extends React.Component {
	render() {
		return (
			<font color={this.props.color} size={this.props.size}>{this.props.children}</font>
		);
	}
}

Font.propTypes = {
	size: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
};


module.exports = Font;