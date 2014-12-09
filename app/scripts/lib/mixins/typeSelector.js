var React = require('react/addons');

var classSet = React.addons.classSet;

var typeArray = ['div', 'link', 'icon'];

var TypeSelector = {

  propTypes: {
    type: React.PropTypes.oneOf(typeArray)
  },

  getType: function () {
    var type = 'div';

    if (typeof this.props.type != 'undefined') {
      if (typeArray.indexOf(this.props.type) != -1) {
        type = this.props.type;
      }
    }
    return type;
  }
}

module.exports = TypeSelector;
