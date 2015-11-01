var React = require('react'),
  PureRenderMixin = require('react-addons').PureRenderMixin;

var Footer = React.createClass({
  mixin: [PureRenderMixin],
  render: function() {
    return (
      <footer>
        <p id="validation-info">
          <a href="http://validator.w3.org/check?uri=referer">
            <img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Strict" height="31" width="88"/>
          </a>
  				<a href="http://jigsaw.w3.org/css-validator/check/referer">
            <img className="vcss" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!"/>
          </a>
  			</p>
  			<p id="credits">
  				<a href="http://www.emeraldion.it">Emeraldion Lodge</a> © 2001-2015 Claudio Procida
  			</p>
  			<p id="disclaimer">
  				Apple, the Apple logo, Macintosh, Mac OS, MacBook, MacBook Pro, MacBook Air, iBook and PowerBook are registered trademark of Apple Inc.
  			</p>
      </footer>
    );
  }
});

module.exports = Footer;
