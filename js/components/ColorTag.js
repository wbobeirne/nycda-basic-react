const React = require("react");

class ColorTag extends React.Component {
  render() {
    const fontColor = this.props.color;
    const fontSize =  this.props.size;
    return (
      <font className="font" color={fontColor} size={fontSize}>{this.props.children}</font>
    );
  }
}

module.exports = ColorTag;
