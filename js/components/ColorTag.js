const React = require("react");

class ColorTag extends React.Component {
  render() {
    const fontAttributes = this.props.attribute;
    return (
      <font className = "ColorTag" size = {fontAttributes} color = {fontAttributes}>{this.props.children}</font>
    );
  }
}

module.exports = ColorTag;
