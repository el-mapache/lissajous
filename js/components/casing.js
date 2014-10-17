/** @jsx React.DOM */

var React = require('react');
var Screen = require('./screen.js');
var LissajousCollection = require('./lissajous-collection.js');
var NewButton = require('./new-button.js');

var Casing = React.createClass({
  componentDidMount: function() {
  },

	render: function() {
		return (
      <div className="grid">
        <div className="col-1-2">
          <Screen canvas={this.props.canvas}  />
          <div className="grid">
            <div className="col-1-4 offset-7">
              <NewButton />
            </div>
          </div>
        </div>
        <div className="col-1-3">
          <LissajousCollection />
        </div>
      </div>
    );
	}
});

module.exports = Casing;