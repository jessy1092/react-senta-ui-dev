var Button = require('./index.js').Button;
var Header = require('./index.js').Header;
var Content = require('./index.js').Content;
var Icon = require('./index.js').Icon;
var Input = require('./index.js').Input;
var Label = require('./index.js').Label;
var List = require('./index.js').List;
var Item = require('./index.js').Item;
var Divider = require('./index.js').Divider;
var Segment = require('./index.js').Segment;
var React = require('react');

var HelloBox = React.createClass({

  hello: function () {
    console.log('hello world');
  },

  render: function () {
    return (
      <Segment>
        <Button className="red">
          <Icon className="alarm" />
        </Button>
        <Divider />
        <Button className="blue 123" onClick={this.hello}>
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
        <Input className="corner labeled">
          <input placeholder="Search..." type="text" />
          <Label className="corner">
            <Icon className="asterisk" />
          </Label>
        </Input>
        <Label>
          Witty
          <Icon className="delete"/>
        </Label>
        <List>
          <Item>
            <Icon className="cloud" />
            <Header>Hello</Header>
          </Item>
          <Item>
            <Icon className="alarm" />
            <Header>Hello123</Header>
          </Item>
        </List>
        <List className="link">
          <Item type="link" className="active">123</Item>
          <Item type="link">321</Item>
        </List>
      </Segment>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
