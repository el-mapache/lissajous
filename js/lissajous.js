/*
  * Defines the set of transformations needed to create a lissajous curve.
*/

var PI = Math.PI;
var SIN = Math.sin;

var ROTATIONS = {
  'circle': PI / 2,
  'parabola': PI / 4,
  'wave': PI / 180
};

var OPERATORS = {
  '+': function add(a, b) {
    return a + b;
  },

  '*': function mult(a, b) {
    return a *b;
  }
};


var LissajousComponent = function(options) {
  options = options || {};

  this.value = options.value || 0;
  this.damping = options.damping || -0.004;
  this.dampen = options.dampen || false;
  this.rotation = options.rotation;
  this.operator = options.operator || null;
};

var Lissajous = function(width, height) {
  this.scale = 12.5;
  this.timeStep = 5;

  this.widthComponent = new LissajousComponent({value: 2, operator: '+', rotation: 'circle'});
  this.heightComponent = new LissajousComponent({value: 3});

  var scale = 12.5;

  var time = 0;

  var radius = 1;
  var amplitude = (height / scale) < (width / scale) ? height / scale : width / scale;


  // A point in time and space.
  function initialPeriod(value, time) {
    return value * time;
  }

  // Applies an optional rotation
  function rotateBy(period, operator, rotation) {
    var fn = OPERATORS[operator];

    if (!fn) {
      return period;
    }

    return fn(period, ROTATIONS[rotation]);
  }

  // Where curve is defined as the inital value optionally rotated
  // by some fixed amount.
  function buildCurve(period) {
    return amplitude * SIN(period);
  }

  // Dampens the motion of one point of a vector.
  function dampen(point, time, damping) {
    damping = damping || -0.004;
    return Math.pow(Math.E, damping * t) * point;
  }


  this.get = function(prop) {
    return prop || null;
  };

  this.set = function(prop, value) {
    if (!prop) {
      return this;
    }

    prop = value;

    return prop;
  };

  this.transform = function(value, time, rotation) {
    if (rotation) {
      return amplitude * SIN(rotateBy(initialPeriod(value, time), '*', rotation));
    }

    return buildCurve(initialPeriod(value, time));
    //return dampen(buildCurve(rotateBy(initialPeriod(value, time),'*', DOUBLE_PI)),time);
  };

  /* this.buildCurve -> output a vector that transforms both components */

  this.lobes = function() {
    return (this.widthComponent.value / this.heightComponent.value) * 100;
  };
};

module.exports = Lissajous;
