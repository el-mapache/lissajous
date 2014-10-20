var Colors = require('./colors.js');

// Adjustable drawing properties passed in to draw.
var VALID_PROPS = [
  'lineWidth',
  'strokeStyle',
  'shadowBlur',
  'shadowColor',
  'shadowOffsetX',
  'shadowOffsetY'
];

var Canvas = function(el) {
  this.canvas = typeof el === "string" ? document.querySelector(el) : el;
  this.ctx = null;
  this.halfWidth = null;
  this.halfHeight = null;

  this._init();
};

Canvas.prototype.drawArc = function(start, end, radius) {
  var x = end.x;
  var y = end.y;
  var hw = this.halfWidth;
  var hh = this.halfHeight;

  var ctx = this.ctx;

  ctx.beginPath();

  if (start) {
    ctx.moveTo(start.x + hw, start.y + hh);
    //ctx.moveTo(start.x - (hw), start.y - (hh));
  }

  var color = Colors.getDirectionalColor(x, y);

  ctx.arcTo(x + hw, y + hh, radius, 0, 0);
  ctx.lineWidth = 1; // 5
  ctx.closePath();
  ctx.strokeStyle = color;
 // ctx.shadowBlur = 30;
 // ctx.shadowColor = color;
 // ctx.shadowOffsetX = 0;
 // ctx.shadowOffsetY = 0;
  ctx.stroke();
};

Canvas.prototype._init = function() {
  if (!('getContext' in this.canvas)) {
    alert('Your browser doesnt support canvas.')
  }

  this.ctx = this.canvas.getContext('2d');

  // Check if we should scale for retina screens
  this._scale();

  this.halfWidth = this.canvas.width / 4;
  this.halfHeight = this.canvas.height / 4;

};

Canvas.prototype._scale = function() {
  var scalingRatio = window.devicePixelRatio;

  // We are on a standard res screen shouldn't scale.
  if (scalingRatio === 1) {
    return;
  }

  var oldWidth = getComputedStyle(this.canvas).getPropertyValue('width').replace('px','');
  var oldHeight = getComputedStyle(this.canvas).getPropertyValue('height').replace('px','');

  this.canvas.width = oldWidth * scalingRatio;
  this.canvas.height = oldHeight * scalingRatio;

  this.canvas.style.width = oldWidth + "px";
  this.canvas.style.height = oldHeight + "px";

  this.ctx.scale(scalingRatio, scalingRatio);
};

Canvas.prototype.height = function() {
  return this.canvas.height;
};

Canvas.prototype.width = function() {
  return this.canvas.width;
};

Canvas.prototype.constructor = Canvas;

module.exports = Canvas;
