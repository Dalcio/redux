import React from "react";
import { connect } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementWithValue,
  decrementWithValue,
} from "../redux/actions";

const Counter = ({
  count,
  increment,
  decrement,
  incrementWithValue,
  decrementWithValue,
  reset,
}) => {
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center">Counter</h2>
      <div className="d-flex  justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary mr-3"
          onClick={decrement}
        >
          -
        </button>
        <span className="h1">{count}</span>
        <button
          type="button"
          className="btn btn-outline-primary ml-3"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="d-flex  justify-content-between align-items-center mb-2">
        <button
          type="button"
          className="btn btn-outline-success flex-fill mr-1"
          onClick={() => decrementWithValue(10)}
        >
          - 10
        </button>
        <button
          type="button"
          className="btn btn-outline-success flex-fill ml-1"
          onClick={() => incrementWithValue(10)}
        >
          + 10
        </button>
      </div>
      <button
        type="button"
        className="btn btn-large btn-outline-danger text-uppercase"
        onClick={reset}
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

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  incrementWithValue,
  decrementWithValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
