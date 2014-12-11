"use strict";
React = require('react/addons');
// React = global.React;

module.exports = global.Semantify = {
  // collections
  Breadcrumb: require('./lib/collections/breadcrumb.jsx')(React),
  Form: require('./lib/collections/form.jsx')(React),
  Grid: require('./lib/collections/grid.jsx')(React),
  Menu: require('./lib/collections/menu.jsx')(React),
  Message: require('./lib/collections/message.jsx')(React),
  Table: require('./lib/collections/table.jsx')(React),

  // commons
  Column: require('./lib/commons/column.jsx')(React),
  Content: require('./lib/commons/content.jsx')(React),
  Field: require('./lib/commons/field.jsx')(React),
  Fields: require('./lib/commons/fields.jsx')(React),
  Row: require('./lib/commons/row.jsx')(React),
  Section: require('./lib/commons/section.jsx')(React),
  Text: require('./lib/commons/text.jsx')(React),

  // elements
  Button: require('./lib/elements/button.jsx')(React),
  Divider: require('./lib/elements/divider.jsx')(React),
  Flag: require('./lib/elements/flag.jsx')(React),
  Header: require('./lib/elements/header.jsx')(React),
  Icon: require('./lib/elements/icon.jsx')(React),
  Image: require('./lib/elements/image.jsx')(React),
  Input: require('./lib/elements/input.jsx')(React),
  Label: require('./lib/elements/label.jsx')(React),
  List: require('./lib/elements/list.jsx')(React),
  Loader: require('./lib/elements/loader.jsx')(React),
  Rail: require('./lib/elements/rail.jsx')(React),
  Reveal: require('./lib/elements/reveal.jsx')(React),
  Segment: require('./lib/elements/segment.jsx')(React),
  Step: require('./lib/elements/step.jsx')(React),
  Steps: require('./lib/elements/steps.jsx')(React),

  // modules
  Dimmer: require('./lib/modules/dimmer.jsx')(React),
  Dropdown: require('./lib/modules/dropdown.jsx')(React),

  // views
  Ad: require('./lib/views/advertisement.jsx')(React),
  Card: require('./lib/views/card.jsx')(React),
  Comment: require('./lib/views/comment.jsx')(React),
  Comments: require('./lib/views/comments.jsx')(React),
  Feed: require('./lib/views/feed.jsx')(React),
  Item: require('./lib/views/item.jsx')(React),
  Items: require('./lib/views/items.jsx')(React),
  Statistic: require('./lib/views/statistic.jsx')(React)
};
