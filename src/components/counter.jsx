import React, { Component } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import { increment, decrement } from "../actions/counteractions";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <IconButton aria-label="decrement" onClick={this.props.decrement}>
          <RemoveCircleIcon />
        </IconButton>
        {this.props.count}
        <IconButton aria-label="increment" onClick={this.props.increment}>
          <AddCircleIcon />
        </IconButton>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Counter);