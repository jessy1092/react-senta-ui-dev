var React = require('react');

var defaultClassName = 'flag ';

var Flag = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  render: function () {
    return (
      <i className={defaultClassName + this.props.className}>
      </i>
    );
  }
});

module.exports = Flag;
