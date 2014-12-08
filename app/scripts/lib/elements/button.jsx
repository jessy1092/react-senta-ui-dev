var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'ui button';

var Button = React.createClass({

  mixins: [ClassGenerator],

  propTypes: {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render: function () {
    return (
      <div className={this.getClassName(defaultClassName)} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Button;
