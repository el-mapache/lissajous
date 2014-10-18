/** @jsx React.DOM */
var React = require('react');

var time = 0;

var draw = function(vector, lastVector, curve) {
  time += curve.timeStep;

  lastVector = vector;
  vector = {
    x: curve.transform(1, time),
    y: curve.transform(2,time)
  };

  this._canvas().drawArc(lastVector, vector, 1);

  if (time <= 360) {
    window.requestAnimationFrame(draw.bind(this, vector, lastVector, curve));
  } else {
    time = 0;
    window.cancelAnimationFrame(this.longId);
  }
};

var Screen = React.createClass({
  longId: null,
  getInitialState: function() {
    return {
      curves: this.props.curves
    };
  },

  componentDidMount: function() {
    this.setState({
      canvas: new this.props.canvas(this.getDOMNode())
    });
  },

  _curves: function() {
    return this.state.curves;
  },

  _canvas: function() {
    return this.state.canvas;
  },

  shouldComponentUpdate: function(newState, oldState) {
    //perform animations, but dont rerender
    var curves = newState.curves;

    if (curves.length === 0) {
      return true;
    }

    var canvas = this._canvas();
    var curve = new curves[curves.length - 1](canvas.width(), canvas.height());

    var vector     = {x: 0, y: 0},
        lastVector = null;

    this.longId = window.requestAnimationFrame(draw.bind(this, vector, lastVector, curve));

    return false;
  },

  handleClick: function() {
    var clientRect = this._canvas().canvas.getBoundingClientRect();

    var clickPoint = {
      x: event.clientX - clientRect.left,
      y: event.clientY - clientRect.top
    };

  },

  render: function() {
    return (
      <canvas className="oscilloscope col-full de-pad" height="auto" width="inherit" onClick={this.handleClick}></canvas>
    );
  }
});

module.exports = Screen
