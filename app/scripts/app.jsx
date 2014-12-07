var Button = require('./index.js').Button;
var Header = require('./index.js').Header;
var Content = require('./index.js').Content;
var Icon = require('./index.js').Icon;
var Input = require('./index.js').Input;
var Label = require('./index.js').Label;
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
        <Header>
          <Icon className="cloud" />
          <Content>
            Header Test
            <Header className="sub">
              sub test
            </Header>
          </Content>
        </Header>
        <Input className="corner labeled" placeHolder="Search...">
          <input placeholder="Search..." type="text" />
          <Label className="corner">
            <Icon className="asterisk" />
          </Label>
        </Input>
      </Segment>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
