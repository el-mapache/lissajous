/** @jsx React.DOM */

var React = require('react');
var s = {
  border: "1px solid blue"
};

var LissajousCollection = React.createClass({
	render: function() {
		return (
      <div class="col-1-4 offset-1-8">
        <LissajousView />
      </div>
    );
	}
});

var LissajousView = React.createClass({
  render: function() {
    return (
      <div class="col-full" style={{
        background: "rgb(98,194,229)",
        color: "rgb(239, 236, 218)",
        padding: "4px"
      }}>Lissajous 1</div>
    );
  }
});

module.exports = {
  collection: LissajousCollection,
  view: LissajousView
};