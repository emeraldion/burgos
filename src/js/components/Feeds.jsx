var React = require('react'),
  PureRenderMixin = require('react-addons').PureRenderMixin;

var Feeds = React.createClass({
  mixin: [PureRenderMixin],
  render: function() {
    return (
      <div id="feeds">
      	<a className="rss" href="/mbl/feed/">RSS Feed</a>
      </div>
    );
  }
});

module.exports = Feeds;
