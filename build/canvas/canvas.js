/**
 * @jsx React.DOM
 */
var oscilloscope = React.createClass({displayName: 'oscilloscope',
  render: function() {
    return (
      React.DOM.canvas({className: "oscilloscope col-1-2 offset-1-4 m-top-40", id: "canvas", height: "auto"})
    );
  }
});

React.renderComponent(
  oscilloscope(null),
  document.getElementById('oscilloscope-view')
);
