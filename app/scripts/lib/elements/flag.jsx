var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');
var Unit = require('../common/unit.jsx');

var defaultClassName = 'flag';

var Flag = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {

    var {className, ...other} = this.props;

    return (
      <Unit {...other}
        className={this.getClassName(defaultClassName)}
        type="icon"
        color="null"
        onClick={this.props.onClick} >
      </Unit>
    );
  }
});

module.exports = Flag;
