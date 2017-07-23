const React = require("react");

class colorTag extends React.Component {
  render() {
    return (
      <font color="purple">{this.props.children}</font>
    );
  }
}

module.exports = colorTag;
