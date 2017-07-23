const React = require("react");

class ColorTag extends React.Component {
  render() {
    return (
      <font color="purple">{this.props.children}</font>
    );
  }
}

module.exports = ColorTag;
