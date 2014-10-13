/**
 * @jsx React.DOM
 */
var oscilloscope = React.createClass({
  render: function() {
    return (
      <canvas className="oscilloscope col-1-2 offset-1-4 m-top-40" id="canvas" height="auto"></canvas>
    );
  }
});

React.renderComponent(
  <oscilloscope />,
  document.getElementById('oscilloscope-view')
);
