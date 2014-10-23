/** @jsx React.DOM */

var React = require('react');
//style={{"border-left": "2px solid orange"}}
var LissajousCollection = React.createClass({
  render: function() {
    var _curves = [];

    this.props.curves.forEach(function(obj,i) {
      _curves.push(LissajousView({key: i+1}));
    });

		return (
      <div className="col-1-4 offset-1-8">
        {_curves}
      </div>
    );
	}
});

// var styles = {
//   background: "rgb(98,194,229)",
//   color: "#efefef",
//   padding: "4px",
//   letterSpacing: "0.05em"
// };

var LissajousView = React.createClass({
  getInitialState: function() {
    return {
      timeStep: 1,
      scale: 10
    };
  },

  render: function() {
    return (
      <div className="grid">
        <div className="col-5-8">
          Lissajous {this.props.key}
        </div>
        <LissajousComponentView />
      </div>
    );
  }
});

var LissajousComponentView = React.createClass({
  getInitialState: function() {
    return {
      value: 0,
      damping: -0.004,
      dampen: false,
      rotation: null,
      operator: null
    };
  },

  onInputChange: function(event) {
    this.setState({
      value: +event.target.value
    });
  },

  render: function() {
    return (
      <div>
        <label name="value">Value</label>
        <input className="col-1-8" type="text" defaultValue="0" onChange={this.onInputChange} />
        <span>{this.state.value}</span>
      </div>
    );
  }
});

module.exports = {
  collection: LissajousCollection,
  view: LissajousView
};
