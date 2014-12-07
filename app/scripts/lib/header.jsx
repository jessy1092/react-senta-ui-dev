var React = require('react');

var defaultClassName = 'ui header ';

var Header = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  render: function () {
    return (
      <div className={defaultClassName + this.props.className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Header;
