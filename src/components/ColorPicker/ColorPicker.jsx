import React, { Component } from "react";
import classNames from "classnames";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    return classNames("option", {
      active: index === this.state.activeOptionIdx,
    });

    // const optionClasses = ["option"];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push("active");
    // }

    // return optionClasses.join(" ");
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="container">
        <h2 className="title">Color Picker</h2>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
