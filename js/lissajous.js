/*
  * Defines the set of transformations needed to create a lissajous curve.
*/

var PI = Math.PI;
var SIN = Math.sin;

var ROTATIONS = {
  'circle': PI / 2,
  'parabola': PI / 4,
  'wave': PI / 180,
  'none': 0
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
  var lissajous = this;

  this.scale = 12.5;
  this.timeStep = 5;
  this.amplitude = (height / this.scale) < (width / this.scale) ? height / this.scale : width / this.scale;

  this.widthComponent = new LissajousComponent({
    value: 1,
    operator: '*',
    rotation: 'wave'
  });

  this.heightComponent = new LissajousComponent({
    value: 2,
    operator: '*',
    rotation: 'wave'
  });


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
    return lissajous.amplitude * Math.sin(period);
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
      return lissajous.amplitude * SIN(rotateBy(initialPeriod(value, time), '*', rotation));
    }

    return buildCurve(initialPeriod(value, time));
  };


  this.build = function(time) {
    var vector = {x: 0, y: 0};

    var xCh = this.widthComponent;
    var yCh = this.heightComponent;

    vector.x = lissajous.amplitude * Math.sin(rotateBy(initialPeriod(xCh.value, time), xCh.operator, xCh.rotation));
    vector.y = lissajous.amplitude * SIN(rotateBy(initialPeriod(yCh.value, time), yCh.operator, yCh.rotation));

    return vector;
  };

  this.lobes = function() {
    return (this.widthComponent.value / this.heightComponent.value) * 100;
  };
};

module.exports = Lissajous;
