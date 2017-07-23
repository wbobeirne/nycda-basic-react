const React = require("react");


class Description extends React.Component {
	render() {
		const libName = this.props.library;
		return (
			<p className="app-description">
					This is {libName}. Even though we dont have any elements
					on the page to start, {libName} quickly fills in the
					javascript content.
			</p>
		);
	}
}

module.exports = Description;
