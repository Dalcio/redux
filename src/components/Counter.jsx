import React from "react";
import { connect } from "react-redux";

import { RESET, DECREMENT, INCREMENT } from "../redux/actions";

const Counter = ({ count, dispatch }) => {
  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <div className="d-flex flex-column">
      <h2>Counter</h2>
      <div className="d-flex  justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={decrement}
        >
          -
        </button>
        <span className="h1">{count}</span>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={increment}
        >
          +
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

export default connect(mapStateToProps)(Counter);
