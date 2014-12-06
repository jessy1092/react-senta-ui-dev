var Button = require('./index.js').Button;
var React = require('react');

var HelloBox = React.createClass({
  render: function () {
    return (
      <Button className="red">
        <i className="cloud icon"></i>
      </Button>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
