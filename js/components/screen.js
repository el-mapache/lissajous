/** @jsx React.DOM */
var React = require('react');

var time = 0;

var draw = function(vector, lastVector, curve) {
  time += curve.timeStep;

  lastVector = vector;
  vector = {
    x: curve.transform(1, time, 'circle'),
    y: curve.transform(2, time)
  };

  this._canvas().drawArc(lastVector, vector, 1);

  if (time <= 360) {
    window.requestAnimationFrame(draw.bind(this, vector, lastVector, curve));
  } else {
    time = 0;
    window.cancelAnimationFrame(this.state.animationId);
    this.setState({animationId: null});
  }
};

var Screen = React.createClass({
  getInitialState: function() {
    return {
      curves:      this.props.curves,
      isAnimating: false,
      animationId: null
    };
  },

  componentDidMount: function() {
    this.setState({
      canvas: new this.props.canvas(this.getDOMNode())
    });
  },

  componentWillReceiveProps: function(nextState) {
    var curves = nextState.curves;

    if (curves.length === 0) {
      return true;
    }

    var canvas = this._canvas();
    var curve = new curves[curves.length - 1](canvas.width(), canvas.height());

    var vector     = {x: 0, y: 0},
        lastVector = null;

    var id = window.requestAnimationFrame(draw.bind(this, vector, lastVector, curve));

    this.setState({
      animationId: id
    });
  },

  shouldComponentUpdate: function() {
    // We basically never want to rerender as the canvas can clear itself.
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
      <canvas className="col-full de-pad"
              height="auto"
              width="inherit"
              style={{border: "1px solid"}}
              onClick={this.handleClick}>
      </canvas>
    );
  },

  _curves: function() {
    return this.state.curves;
  },

  _canvas: function() {
    return this.state.canvas;
  }
});

module.exports = Screen
