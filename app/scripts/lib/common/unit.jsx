var React = require('react');

var Unit = React.createClass({

  propTypes: {
    className: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  render: function () {

    var {className, type, color, onClick, ...other} = this.props;

    switch (type) {

      case 'link':
        return (
          <a {...other} className={this._generateClassName()} onClick={this._onClick}>
            {this.props.children}
          </a>
        );

      case 'icon':
        return (
          <i className={this._generateClassName()} onClick={this._onClick}>
            {this.props.children}
          </i>
        );

      case 'div':
      default:
        return (
          <div className={this._generateClassName()} onClick={this._onClick}>
            {this.props.children}
          </div>
        );
    }
  },

  _generateClassName: function () {
    var className = this.props.className;

    if (this.props.color != 'null') {
      className += ' ' + this.props.color;
    }

    return className;
  },

  _onClick: function () {
    if (typeof this.props.onClick != 'undefined') {
      this.props.onClick();
    }
  }
});

module.exports = Unit;
