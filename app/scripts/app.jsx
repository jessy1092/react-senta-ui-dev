var Button = require('./index.js').Button;
var Icon = require('./index.js').Icon;
var Divider = require('./index.js').Divider;
var Segment = require('./index.js').Segment;
var React = require('react');

var HelloBox = React.createClass({
  render: function () {
    return (
      <Segment>
        <Button className="red">
          <Icon className="alarm" />
        </Button>
        <Divider />
        <Button className="blue">
          <Icon className="cloud" />
        </Button>
      </Segment>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
