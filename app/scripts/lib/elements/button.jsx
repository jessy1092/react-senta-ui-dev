var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var ColorSelector = require('../mixins/colorSelector.js');
var Unit = require('./unit.jsx');

var defaultClassName = 'ui button';

var Button = React.createClass({

  mixins: [ClassGenerator, ColorSelector],

  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {

    var {className, color, ...other} = this.props;

    return (
      <Unit className={this.getClassName(defaultClassName)}
        type="div"
        color={this.getColor()}
        onClick={this.props.onClick} >
        {this.props.children}
      </Unit>
    );
  }
});

module.exports = Button;
