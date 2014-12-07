var React = require('react');

var defaultClassName = 'icon ';

var Icon = React.createClass({

  propTypes: {
    className:  React.PropTypes.string
  },

  render: function () {
    return (
      <i className={defaultClassName + this.props.className}>
      </i>
    );
  }
});

module.exports = Icon;
