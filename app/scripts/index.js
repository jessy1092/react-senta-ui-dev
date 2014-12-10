module.exports = global.Semantify = {
  Breadcrumb: require('./lib/collections/breadcrumb.jsx'),

  Content: require('./lib/common/content.jsx'),
  Menu: require('./lib/common/menu.jsx'),
  Text: require('./lib/common/text.jsx'),
  Section: require('./lib/common/section.jsx'),

  Button: require('./lib/elements/button.jsx'),
  Divider: require('./lib/elements/divider.jsx'),
  Flag: require('./lib/elements/flag.jsx'),
  Header: require('./lib/elements/header.jsx'),
  Icon: require('./lib/elements/icon.jsx'),
  Input: require('./lib/elements/input.jsx'),
  Label: require('./lib/elements/label.jsx'),
  List: require('./lib/elements/list.jsx'),
  Loader: require('./lib/elements/loader.jsx'),
  Rail: require('./lib/elements/rail.jsx'),
  Reveal: require('./lib/elements/reveal.jsx'),
  Segment: require('./lib/elements/segment.jsx'),
  Step: require('./lib/elements/step.jsx'),
  Steps: require('./lib/elements/steps.jsx'),

  Item: require('./lib/views/item.jsx'),
  Items: require('./lib/views/items.jsx'),

  Dimmer: require('./lib/modules/dimmer.jsx'),
  Dropdown: require('./lib/modules/dropdown.jsx')
};
