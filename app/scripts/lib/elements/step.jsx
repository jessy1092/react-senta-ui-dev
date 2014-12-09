var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'step';

var Step = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

module.exports = Step;
