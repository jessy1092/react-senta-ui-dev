var React = require('react');

var defaultClassName = 'content ';

var Content = React.createClass({

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

module.exports = Content;
