/** @jsx React.DOM */
var React = require('react');


var RangeControl = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.data.value
    };
  },

  handleInput: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var data = this.props.data
    return (
      <div className="col-1-3" key={data.key}>
        <label className="m-bottom-10" htmlFor={data.name}>{data.label.text}</label>
        <input key={data.key}
               type="range"
               onChange={this.handleInput}
               name={data.name}
               min={data.min}
               max={data.max}
               step={data.step}
               defaultValue={data.value} />
        <span>current value: {this.state.value}</span>
      </div>
    );
  }
});




var controlTypes = {
  range: RangeControl
};

var ControlGroup = React.createClass({
	render: function() {
    var _controls = [];

    this.props.controls.forEach(function(control,i) {
      control.key = i;
      _controls[i] = controlTypes[control.type]({
        data: control
      });
    });

    return (
      <div>{_controls}</div>
    );
  }
});


module.exports = ControlGroup;
