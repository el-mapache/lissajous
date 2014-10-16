/** @jsx React.DOM */
var controls = [
  {
    type: 'range',
    name: "x-axis",
    min: "0",
    max: "360",
    step: "1",
    value: "2",
    label: {
      text: "x-axis degree"
    }
  },

  {
    type: 'range',
    name: "y-axis",
    min: "0",
    max: "360",
    step: "1",
    value: "3",
    label: {
      text: "y-axis degree"
    }
  },
  {
    type: 'range',
    name: "scale",
    min: "0",
    max: "200",
    step: "0.5",
    value: "4.5",
    label: {
      text: "scale"
    }
  },
  {
    type: 'range',
    name: "speed",
    min: "0",
    max: "30",
    step: "0.1",
    value: "0.1",
    label: {
      text: "speed"
    }
  }
];

var React = require('react');
var ControlGroup = require('./components/controls/controls.js');
var Screen = require('./components/screen.js');
var Lissajous = require('./lissajous.js');
var Color = require('./colors.js');
var Canvas = require('./canvas.js');

React.renderComponent(
  <ControlGroup controls={controls} />,
  document.getElementById('controls')
);

React.renderComponent(
  <Screen />,
  document.getElementById('oscilloscope-view')
);

var canvas = new Canvas('#canvas');


var vector = {x: 0, y: 0};
var lastVector = null;

var l = new Lissajous(canvas.width(), canvas.height());
t = 0;
var draw = function() {
  t += l.timeStep;

  lastVector = vector;
  vector = {x: l.transform(2, t), y: l.transform(3,t)};

  canvas.drawArc(lastVector, vector, 1);

  if (t <= 360) {
    window.requestAnimationFrame(draw);
  }
};

window.requestAnimationFrame(draw);