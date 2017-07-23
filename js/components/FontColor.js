const React = require("react");

class FontColor extends React.Component {
	render() {
		const colorName = this.props.color;
		return (
			<font className="font" color={colorName}>I am a {colorName} font</font>
		);
	}
}

module.exports = FontColor;
