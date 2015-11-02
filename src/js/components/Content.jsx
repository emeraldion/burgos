var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <main>
        <h2>Welcome to the Shared Battery Data Archive!</h2>
        <div className="hw_classes">

  				<div className="media hw_class">
						<img className="media-figure hw_icon" src="./img/hw/macbookpro.png" alt="MacBook Pro Family" />
            <div className="media-body">
  						<h3>MacBook Pro Family</h3>
  						<ul className="hw_list">
  							<li><a href="/mbl/list/MacBookPro7,1">MacBook Pro (13-inch, Mid 2010)</a></li>
  							<li><a href="/mbl/list/MacBookPro6,2">MacBook Pro (15-inch, Mid 2010)</a></li>
  							<li><a href="/mbl/list/MacBookPro6,1">MacBook Pro (17-inch, Mid 2010)</a></li>
  							<li><a href="/mbl/list/">more...</a></li>
  						</ul>
            </div>
  				</div>

  				<div className="media hw_class">
						<img className="media-figure hw_icon" src="./img/hw/macbook.png" alt="MacBook Family" />
            <div className="media-body">
  						<h3>MacBook Family</h3>
  						<ul className="hw_list">
  							<li><a href="/mbl/list/MacBook7,1">MacBook (Mid 2010)</a></li>
  							<li><a href="/mbl/list/MacBook6,1">MacBook (Late 2009)</a></li>
  							<li><a href="/mbl/list/MacBook5,2">MacBook (Mid 2009)</a></li>
  							<li><a href="/mbl/list/MacBook5,2">MacBook (Early 2009)</a></li>
  							<li><a href="/mbl/list/">more...</a></li>
  						</ul>
            </div>
  				</div>

  				<div className="media hw_class">
						<img className="media-figure hw_icon" src="./img/hw/macbookair.png" alt="MacBook Air Family" />
            <div className="media-body">
  						<h3>MacBook Air Family</h3>
  						<ul className="hw_list">
  							<li><a href="/mbl/list/MacBookAir3,1">MacBook Air (11-inch, Late 2010)</a></li>
  							<li><a href="/mbl/list/MacBookAir3,2">MacBook Air (13-inch, Late 2010)</a></li>
  							<li><a href="/mbl/list/MacBookAir2,1">MacBook Air (Mid 2009)</a></li>
  							<li><a href="/mbl/list/MacBookAir2,1">MacBook Air (Late 2008)</a></li>
  							<li><a href="/mbl/list/MacBookAir1,1">MacBook Air</a></li>
  						</ul>
            </div>
  				</div>

  				<div className="media hw_class">
						<img className="media-figure hw_icon" src="./img/hw/powerbook.png" alt="Powerbook Family" />
            <div className="media-body">
  						<h3>PowerBook Family</h3>
  						<ul className="hw_list">
  							<li><a href="/mbl/list/PowerBook5,8">PowerBook G4 (DL SD, 15-inch)</a></li>
  							<li><a href="/mbl/list/PowerBook5,9">PowerBook G4 (DL SD, 17-inch)</a></li>
  							<li><a href="/mbl/list/PowerBook6,4">PowerBook G4 (12-inch 1.33 GHz)</a></li>
  							<li><a href="/mbl/list/PowerBook6,8">PowerBook G4 (12-inch 1.5 GHz)</a></li>
  							<li><a href="/mbl/list/">more...</a></li>
  						</ul>
            </div>
  				</div>

  				<div className="media hw_class">
						<img className="media-figure hw_icon" src="./img/hw/ibook.png" alt="iBook Family" />
            <div className="media-body">
  						<h3>iBook Family</h3>
  						<ul className="hw_list">
  							<li><a href="/mbl/list/PowerBook6,5">iBook G4 (12-inch, Late 2004)</a></li>
  							<li><a href="/mbl/list/PowerBook6,5">iBook G4 (14-inch, Late 2004)</a></li>
  							<li><a href="/mbl/list/PowerBook6,7">iBook G4 (12-inch, Mid 2005)</a></li>
  							<li><a href="/mbl/list/PowerBook6,7">iBook G4 (14-inch, Mid 2005)</a></li>
  							<li><a href="/mbl/list/">more...</a></li>
  						</ul>
            </div>
  				</div>

  				<div className="archive_info">
  					<h3>Features</h3>
  					<ul>
  						<li><span id="total_count">65862</span> unique entries (and counting).</li>
  						<li>229 different laptop models.</li>
  						<li>Scatterplots and regression lines for populations.</li>
  						<li>RSS Feeds.</li>
  						<li>CSV data exporting.</li>
  						<li>Much more...</li>
  					</ul>
  				</div>
        </div>
      </main>
    );
  }
});

module.exports = Content;
