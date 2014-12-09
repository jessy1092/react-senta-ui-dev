var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var ColorSelector = require('../mixins/colorSelector.js');
var Unit = require('./unit.jsx');

var defaultClassName = 'icon';

var Icon = React.createClass({

  mixins: [ClassGenerator, ColorSelector],

  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {

    var {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="icon"
        color={this.getColor()}
        onClick={this.props.onClick}>
      </Unit>
    );
  }
});

module.exports = Icon;
