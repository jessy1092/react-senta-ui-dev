var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'ui items';

var Items = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string,
    type: React.PropTypes.string
  },

  render: function () {
    var type = '';

    if (typeof this.props.type != 'undefined') {
      if (this.props.type == 'link') {
        type = 'link';
      }
    }

    return (
      <div className={this.getClassName(defaultClassName, type)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Items;
