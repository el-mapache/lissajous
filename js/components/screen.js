/** @jsx React.DOM */
var React = require('react');

var Screen = React.createClass({
  componentDidMount: function() {
    this.setState({
      canvas: new this.props.canvas(this.getDOMNode().id)
    });
  },

  render: function() {
    return (
      <canvas className="oscilloscope col-full" id="canvas" height="auto"></canvas>
    );
  }
});

module.exports = Screen
