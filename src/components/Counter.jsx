import React from "react";
import { connect } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementWithValue,
  decrementWithValue,
} from "../redux/actions";

const Counter = ({ count, dispatch }) => {
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementWithValue = (value) => {
    dispatch(incrementWithValue(value));
  };

  const handleDecrementWithValue = (value) => {
    dispatch(decrementWithValue(value));
  };

  return (
    <div className="d-flex flex-column">
      <h2>Counter</h2>
      <div className="d-flex  justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary mr-3"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="h1">{count}</span>
        <button
          type="button"
          className="btn btn-outline-primary ml-3"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="d-flex  justify-content-between align-items-center mb-2">
        <button
          type="button"
          className="btn btn-outline-success flex-fill mr-1"
          onClick={() => handleDecrementWithValue(10)}
        >
          - 10
        </button>
        <button
          type="button"
          className="btn btn-outline-success flex-fill ml-1"
          onClick={() => handleIncrementWithValue(10)}
        >
          + 10
        </button>
      </div>
      <button
        type="button"
        className="btn btn-large btn-outline-danger text-uppercase"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
