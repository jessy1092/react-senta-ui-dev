var React = require('react');

var buttonClassName = 'ui button ';

var Button = React.createClass({

  propTypes: {
    className:  React.PropTypes.string,
    icon:       React.PropTypes.array,
    content:    React.PropTypes.string
  },

  render: function () {
    return (
      <div className={buttonClassName + this.props.className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Button;
