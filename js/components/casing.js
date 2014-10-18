/** @jsx React.DOM */

var React = require('react');
var Screen = require('./screen.js');
var Lissajous = require('../lissajous.js');
var LissajousCollection = require('./lissajous-collection.js');

var Collection = LissajousCollection.collection;

var Casing = React.createClass({
  getInitialState: function() {
    return {
      curves: this.props.curves
    };
  },

  handleClick: function() {
    // register a new lissajous curve object
    var curve = Lissajous;
    var nextCurve = this.state.curves.concat([curve]);
    this.setState({ curves: nextCurve });
  },

	render: function() {
		return (
      <div className="grid m-top-20">
        <div className="col-1-2">
          <Screen canvas={this.props.canvas} curves={this.state.curves} />
          <div className="grid">
            <div className="col-1-4 offset-7-8">
              <button type="button" className="m-top-40" onClick={this.handleClick}>Add Curve</button>
            </div>
          </div>
        </div>
        <Collection curves={this.state.curves} />
      </div>
    );
	}
});

module.exports = Casing;