var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var ColorSelector = require('../mixins/colorSelector.js');
var TypeSelector = require('../mixins/typeSelector.js');
var Unit = require('../common/unit.jsx');

var defaultClassName = 'section';

var Section = React.createClass({

  mixins: [ClassGenerator, ColorSelector, TypeSelector],

  render: function () {

    var {className, color, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color={this.getColor()} >
        {this.props.children}
      </Unit>
    );
  }
});

module.exports = Section;
