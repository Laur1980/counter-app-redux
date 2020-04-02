import React from "react";

import { connect } from "react-redux";

import Line from "../line-component/line.component";
import "./counter.css";

import * as actionType from "../store/actions";

class Counter extends React.Component {
  componentDidMount() {
    this.props.onUpdateTotal();
  }

  handleRemoveLine = id => {
    if (!id) {
      return;
    }
    this.props.onRemoveLine(id);
    this.props.onUpdateTotal();
  };

  handleLineElementsChange = line => {
    if (!line) {
      return;
    }
    this.props.onChangeLine(line);
    this.props.onUpdateTotal();
  };

  render() {
    return (
      <div>
        <h1>Total: {this.props.total}</h1>
        <div className="counter-container">
          {this.props.lines.map(line => (
            <Line
              key={line.id}
              line={line}
              onElementsChange={this.handleLineElementsChange}
              onRemoveBtnClick={this.handleRemoveLine}
            ></Line>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.total,
    lines: state.lines,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateTotal: () => dispatch({ type: actionType.UPDATE_TOTAL }),
    onChangeLine: line =>
      dispatch({ type: actionType.CHANGE_LINE, line: line }),
    onRemoveLine: id => dispatch({ type: actionType.REMOVE_LINE, id: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
