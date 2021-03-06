const React = require("react");

class Title extends React.Component {
	render() {
		return (
			<h1 className="app-title">{this.props.children}</h1>
		);
	}
}

module.exports = Title;
