/** @jsx React.DOM */

var React = require('React');

var NewButton = React.createClass({
	handleClick: function(event) {
    console.log(event);
  },

  render: function() {
    return (
      <button type="submit" className="m-top-40" onClick={this.handleClick}>Add Curve</button>
    );
  }
});

module.exports = NewButton;