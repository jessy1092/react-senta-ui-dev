var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'ui reveal';

var Reveal = React.createClass({

  mixins: [ClassGenerator],

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

module.exports = Reveal;
