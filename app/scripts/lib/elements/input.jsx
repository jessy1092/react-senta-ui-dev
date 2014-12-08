var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'ui input';

var Input = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string
  },

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Input;
