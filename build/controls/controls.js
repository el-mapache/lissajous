/** @jsx React.DOM */

var RangeControl = React.createClass({displayName: 'RangeControl',
  render: function() {
    debugger
    return (
      React.DOM.div({className: "col-1-3"}, 
        React.DOM.label({htmlFor: this.props.name}, this.props.label.text), 
        this.props.element
      )
    );
  }
});

var controls = [
  {
    type: 'range',
    name: "x-axis",
    element: React.DOM.input({htmlType: "range", htmlName: "x-axis", htmlMin: "0", htmlMax: "360", htmlStep: "1", htmlValue: "2"}),
    label: {
      text: "x-axis degree"
    }
  }
];

var controlTypes = {
  range: RangeControl
};

var ControlGroup = React.createClass({displayName: 'ControlGroup',
	render: function() {
    var _controls = [];
    this.props.controls.forEach(function(control,i) {
      _controls[i] = controlTypes[control.type]({name: control.name, label: control.label, element: control.element});
    });

    return (
      React.DOM.div(null, controls)
    );
  }
});





React.renderComponent(
  ControlGroup({controls: controls}),
  document.getElementById('controls')
);
