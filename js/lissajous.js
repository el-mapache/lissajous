/*
  * Defines the set of transformations needed to create a lissajous curve.
*/

var Lissajous = function(width, height) {
  var PI = Math.PI;
  var ROTATIONS = {
    'circle': PI / 2,
    'parabola': PI / 4,
    'wave': PI / 180
  };

  var scale = 12.5;
  var x = 2;
  var y = 3;
  var time = 0;
  var timeStep = 1;
  var radius = 1;
  var startVector = {};
  var amplitude = (height / scale) < (width / scale) ? height / scale : width / scale;

  var DOUBLE_PI = PI * 2; // useful only with a plus

   var SLASHED_ZERO_A = PI / 180; // wave

  var CIRCLE = PI / 2;
  var PARABOLA = PI / 4;

  var xDamper = -0.004;
  var yDamper = -0.004;
  var SIN = Math.sin;

  var OPERATORS = {
    '+': function add(a, b) {
      return a + b;
    },

    '*': function mult(a, b) {
      return a *b;
    }
  };


  function curry(fn) {
    var args = [].slice.call(arguments,1);

    return function() {
      return fn.apply(this, args.concat([].slice.call(arguments,0)));
    };
  }

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
    return amplitude * Math.sin(period);
  }

  // Dampens the motion of one point of a vector.
  function dampen(point, time, damping) {
    damping = damping || -0.004;
    return Math.pow(Math.E, damping * t) * point;
  }

  this.timeStep = timeStep;

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
    // if (rotation) {
    //   return amplitude * Math.sin(rotateBy(initialPeriod(value, time), '+', rotation));
    // }

    return buildCurve(initialPeriod(value, time));
    //return dampen(buildCurve(rotateBy(initialPeriod(value, time),'*', DOUBLE_PI)),time);
  };

  this.lobes = function() {
    return (x / y) * 100;
  };
};

module.exports = Lissajous;
