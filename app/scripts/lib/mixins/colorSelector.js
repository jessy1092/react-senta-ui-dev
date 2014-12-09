var React = require('react');

var colorArray = [
  'black', 'yellow', 'green', 'blue',
  'orange', 'purple', 'red', 'teal'];

var ColorSelector = {

  propTypes: {
    color: React.PropTypes.oneOf(colorArray)
  },

  getColor: function () {
    var color = 'null';

    if (typeof this.props.color != 'undefined') {

      if (colorArray.indexOf(this.props.color) != -1) {
        color = this.props.color;
      }
    }

    return color;
  }
}

module.exports = ColorSelector;
