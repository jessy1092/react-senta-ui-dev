"use strict";
React = require('react/addons');
// React = global.React;

module.exports = global.Semantify = {
  Breadcrumb: require('./lib/collections/breadcrumb.jsx')(React),

  Content: require('./lib/common/content.jsx')(React),
  Menu: require('./lib/common/menu.jsx')(React),
  Text: require('./lib/common/text.jsx')(React),
  Section: require('./lib/common/section.jsx')(React),

  Button: require('./lib/elements/button.jsx')(React),
  Divider: require('./lib/elements/divider.jsx')(React),
  Flag: require('./lib/elements/flag.jsx')(React),
  Header: require('./lib/elements/header.jsx')(React),
  Icon: require('./lib/elements/icon.jsx')(React),
  Input: require('./lib/elements/input.jsx')(React),
  Label: require('./lib/elements/label.jsx')(React),
  List: require('./lib/elements/list.jsx')(React),
  Loader: require('./lib/elements/loader.jsx')(React),
  Rail: require('./lib/elements/rail.jsx')(React),
  Reveal: require('./lib/elements/reveal.jsx')(React),
  Segment: require('./lib/elements/segment.jsx')(React),
  Step: require('./lib/elements/step.jsx')(React),
  Steps: require('./lib/elements/steps.jsx')(React),

  Item: require('./lib/views/item.jsx')(React),
  Items: require('./lib/views/items.jsx')(React),

  Dimmer: require('./lib/modules/dimmer.jsx')(React),
  Dropdown: require('./lib/modules/dropdown.jsx')(React)
};
