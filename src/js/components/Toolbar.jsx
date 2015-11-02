var React = require('react'),
  PureRenderMixin = require('react-addons').PureRenderMixin;

var Toolbar = React.createClass({
  mixin: [PureRenderMixin],
  render: function() {
    return (
      <p className="noprint">
				<a href="/mbl/list/">Go to complete list</a> |
				<a href="/mbl/faq/" className="question">FAQ</a>
			</p>
    );
  }
});

module.exports = Toolbar;
