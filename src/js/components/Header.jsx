var React = require('react'),
  PureRenderMixin = require('react/addons').PureRenderMixin,
  Feeds = require('./Feeds.jsx');

var Header = React.createClass({
  mixin: [PureRenderMixin],
  render: function() {
    return (
      <header>
        <h1>
          <a href="http://www.emeraldion.it/software/macosx/minibatterylogger.html">MiniBatteryLogger</a> - Shared Battery Data Archive
        </h1>
        <Feeds />
      </header>
    );
  }
});

module.exports = Header;
