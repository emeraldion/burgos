var React = require('react'),
  Header = require('./Header.jsx'),
  Content = require('./Content.jsx'),
  Footer = require('./Footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
