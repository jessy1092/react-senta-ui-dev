var Button = require('./index.js').Button;
var Header = require('./index.js').Header;
var Content = require('./index.js').Content;
var Flag = require('./index.js').Flag;
var Icon = require('./index.js').Icon;
var Input = require('./index.js').Input;
var Label = require('./index.js').Label;
var List = require('./index.js').List;
var Item = require('./index.js').Item;
var Items = require('./index.js').Items;
var Divider = require('./index.js').Divider;
var Dropdown = require('./index.js').Dropdown;
var Text = require('./index.js').Text;
var Segment = require('./index.js').Segment;
// var React = require('react');

var HelloBox = React.createClass({

  hello: function () {
    console.log('hello world');
  },

  render: function () {
    return (
      <Segment>
        <Button color="red">
          <Icon className="alarm" />
        </Button>
        <Divider />
        <Button color="blue" onClick={this.hello}>
          <Icon className="cloud" />
        </Button>
        <Flag className="tw" onClick={this.hello}/>
        <Header>
          <Icon className="cloud" color="red" />
          <Content>
            Header Test
            <Header className="sub" color="red">
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
            <Header type="link">Hello123</Header>
          </Item>
        </List>
        <Items className="link">
          <Item>123</Item>
          <Item>321</Item>
        </Items>
        <Dropdown className="floating search labeled icon button">
          <Icon className="world" />
          <Text>Shop</Text>
          <div className="menu">
            <Header>Categories</Header>
            <Item value="ad">Clohing</Item>
            <Item value="cd">Home</Item>
          </div>
        </Dropdown>
      </Segment>
    );
  }
});

React.render(
  <HelloBox />,
  document.getElementById('content')
);
