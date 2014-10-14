/** @jsx React.DOM */

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
      <div className="col-1-3">
        <label className="m-bottom-10" htmlFor={data.name}>{data.label.text}</label>
        <input type="range"
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

var controls = [
  {
    type: 'range',
    name: "x-axis",
    min: "0",
    max: "360",
    step: "1",
    value: "2",
    label: {
      text: "x-axis degree"
    }
  },

  {
    type: 'range',
    name: "y-axis",
    min: "0",
    max: "360",
    step: "1",
    value: "3",
    label: {
      text: "y-axis degree"
    }
  },
  {
    type: 'range',
    name: "scale",
    min: "0",
    max: "200",
    step: "0.5",
    value: "4.5",
    label: {
      text: "scale"
    }
  },
  {
    type: 'range',
    name: "speed",
    min: "0",
    max: "30",
    step: "0.1",
    value: "0.1",
    label: {
      text: "speed"
    }
  }
];

var controlTypes = {
  range: RangeControl
};

var ControlGroup = React.createClass({
  componentDidMount: function() {
    console.log(arguments);
  },
  test: function() [

  console.log('hi')
},
	render: function() {
    var _controls = [];

    this.props.controls.forEach(function(control,i) {
      controls.key = i;
      _controls[i] = controlTypes[control.type]({
        data: control,
        onChange: this.test
      });
    });

    return (
      <div>{_controls}</div>
    );
  }
});



React.renderComponent(
  <ControlGroup controls={controls} />,
  document.getElementById('controls')
);
