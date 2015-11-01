var React = require('react'),
  Header = require('./Header.jsx'),
  Footer = require('./Footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <main></main>
        <Footer />
      </div>
    );
  }
});

module.exports = App;
