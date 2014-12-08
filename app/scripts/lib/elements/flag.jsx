var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'flag';

var Flag = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string
  },

  render: function () {
    return (
      <i className={this.getClassName(defaultClassName)}>
      </i>
    );
  }
});

module.exports = Flag;
