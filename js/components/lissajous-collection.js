/** @jsx React.DOM */

var React = require('react');
var Input = require('./input.js');

//style={{"border-left": "2px solid orange"}}
var LissajousCollection = React.createClass({
  render: function() {
    var _curves = [];

    this.props.curves.forEach(function(obj,i) {
      _curves.push(LissajousView({key: i+1, model: obj}));
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
      scale: 10,
      model: this.props.model
    };
  },

  render: function() {
    return (
      <div className="grid">
        <div className="col-5-8">
          Lissajous {this.props.key}
        </div>
        <LissajousComponentView model={this.props.model.widthComponent} />
      </div>
    );
  }
});

var input = {
  input: {
    type: 'text',
    defaultValue: 0,
    className: "col-1-8",
    name: "value"
  },
  label: {
    htmlFor: "value",
    text: "Value"
  }
};

var LissajousComponentView = React.createClass({
  getInitialState: function() {
    return {
      model: this.props.model
    };
  },

  onInputChange: function(event) {
    this.state.model.set('value', +event.target.value);
  },

  onDampenClick: function() {
    this.setState({
      dampen: this.state.dampen ? false : true
    })
  },

  render: function() {
    var model = this.state.model;
    return (
      <div>
        <Input data={input} value={model.get('value')} onChange={this.onInputChange} />
        <button type="button" onClick={this.onDampenClick}>Dampening: {this.state.dampen ? 'On': 'Off'}</button>
        <select>
          <option></option>
        </select>
      </div>
    );
  }
});

module.exports = {
  collection: LissajousCollection,
  view: LissajousView
};
