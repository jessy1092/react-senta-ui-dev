var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var ColorSelector = require('../mixins/colorSelector.js');
var Unit = require('../common/unit.jsx');

var defaultClassName = 'icon';

var Icon = React.createClass({

  mixins: [ClassGenerator, ColorSelector],

  render: function () {

    var {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="icon"
        color={this.getColor()} >
      </Unit>
    );
  }
});

module.exports = Icon;
