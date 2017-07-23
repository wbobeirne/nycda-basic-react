const React = require("react");
const PropTypes = require("prop-types");
// import PropTypes from 'prop-types';

class Title extends React.Component {
	render() {
		return (
			<h1 className="app-title">{this.props.children}</h1>
		);
	}
}

Title.propTypes = {
	children: PropTypes.number.isRequired,
};

module.exports = Title;
