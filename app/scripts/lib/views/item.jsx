var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var TypeSelector = require('../mixins/typeSelector.js');
var Unit = require('../common/unit.jsx');

var defaultClassName = 'item';

var Item = React.createClass({

  mixins: [ClassGenerator, TypeSelector],

  render: function () {

    var {className, type, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type={this.getType()}
        color="null">
        {this.props.children}
      </Unit>
    );
  }
});

module.exports = Item;
