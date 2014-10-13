/** @jsx React.DOM */

var RangeControl = React.createClass({
  render: function() {
    debugger
    return (
      <div className="col-1-3">
        <label htmlFor={this.props.name}>{this.props.label.text}</label>
        {this.props.element}
      </div>
    );
  }
});

var controls = [
  {
    type: 'range',
    name: "x-axis",
    element: <input htmlType="range" htmlName="x-axis" htmlMin="0" htmlMax="360" htmlStep="1" htmlValue="2" />,
    label: {
      text: "x-axis degree"
    }
  }
];

var controlTypes = {
  range: RangeControl
};

var ControlGroup = React.createClass({
	render: function() {
    var _controls = [];
    this.props.controls.forEach(function(control,i) {
      _controls[i] = controlTypes[control.type]({name: control.name, label: control.label, element: control.element});
    });

    return (
      <div>{controls}</div>
    );
  }
});





React.renderComponent(
  <ControlGroup controls={controls} />,
  document.getElementById('controls')
);
