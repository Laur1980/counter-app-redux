import React from "react";
import "./line.component.css";

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOnMinBtn = this.handleClickOnMinBtn.bind(this);
    this.handleClickOnPlusBtn = this.handleClickOnPlusBtn.bind(this);
    this.handleClickOnRemoveLineBtn = this.handleClickOnRemoveLineBtn.bind(
      this
    );
  }

  handleClickOnPlusBtn = () => {
    let counter = this.props.line.elements;
    counter++;
    const line = {
      id: this.props.line.id,
      elements: counter
    };
    this.props.onElementsChange(line);
  };

  handleClickOnMinBtn = () => {
    let counter = this.props.line.elements;
    if (counter === 0) {
      return;
    }
    --counter;
    const line = {
      id: this.props.line.id,
      elements: counter
    };
    this.props.onElementsChange(line);
  };

  handleClickOnRemoveLineBtn = () => {
    const id = this.props.line.id;
    this.props.onRemoveBtnClick(id);
  };

  render() {
    return (
      <div className="line-cotainer">
        {this.props.line.elements === 0 ? (
          <span className="line-element remove-btn">ZERO</span>
        ) : (
          <span className="line-element">{this.props.line.elements}</span>
        )}
        <span className="line-element">
          <button className="add-btn" onClick={this.handleClickOnPlusBtn}>
            +
          </button>
        </span>
        <span className="line-element">
          <button className="remove-btn" onClick={this.handleClickOnMinBtn}>
            -
          </button>
        </span>
        <span className="line-element">
          <button
            className="remove-btn"
            onClick={this.handleClickOnRemoveLineBtn}
          >
            REMOVE
          </button>
        </span>
      </div>
    );
  }
}
