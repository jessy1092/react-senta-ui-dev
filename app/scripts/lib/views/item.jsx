var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'item';

var Item = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string,
    type: React.PropTypes.string
  },

  render: function () {

    switch (this.props.type) {

      case 'link':
        return (
          <a className={this.getClassName(defaultClassName)}>
            {this.props.children}
          </a>
        );

      case 'div':
      default:
        return (
          <div className={this.getClassName(defaultClassName)}>
            {this.props.children}
          </div>
        );
    }
  }
});

module.exports = Item;
