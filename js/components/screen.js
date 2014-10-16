/** @jsx React.DOM */
var React = require('react');

var Screen = React.createClass({
  render: function() {
    return (
      <canvas className="oscilloscope col-1-2 offset-1-4 m-top-40" id="canvas" height="auto"></canvas>
    );
  }
});

module.exports = Screen
