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
var Casing = require('./components/casing.js');
var ControlGroup = require('./components/controls/controls.js');
var Canvas = require('./canvas.js');

React.renderComponent(
  <Casing canvas={Canvas} curves={[]} count={0} />,
  document.body
);
