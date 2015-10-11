/** @jsx React.DOM */
var React = require('react');
var Framework = require('../framework.js');


var InputControl = React.createClass({
  getInitialState: function() {
    var inputData = Framework.Utils.extend({}, this.props.data.input, {onChange: this.props.onChange});

    return {
      input: inputData,
      label: this.props.data.label,
    };
  },

  render: function() {
    var input = React.DOM.input(this.state.input);
    return (
      <div>
        <label htmlFor={this.state.label.htmlFor}>{this.state.label.text}</label>
        {input}
        <div>Current Value: {this.props.value}</div>
      </div>
    );
  }
});

module.exports = InputControl;