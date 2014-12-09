var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var ColorSelector = require('../mixins/colorSelector.js');
var Unit = require('./unit.jsx');

var defaultClassName = 'ui label';

var Label = React.createClass({

  mixins: [ClassGenerator, ColorSelector],

  render: function () {

    var {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="div"
        color={this.getColor()}>
        {this.props.children}
      </Unit>
    );
  }
});

module.exports = Label;
