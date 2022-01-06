export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_WITH_VALUE = "INCREMENT_WITH_VALUE";
export const DECREMENT_WITH_VALUE = "DECREMENT_WITH_VALUE";
export const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });

export const decrement = () => ({ type: DECREMENT });

export const incrementWithValue = (value) => ({
  type: INCREMENT_WITH_VALUE,
  payload: { value },
});

export const decrementWithValue = (value) => ({
  type: DECREMENT_WITH_VALUE,
  payload: { value },
});

export const reset = () => ({ type: RESET });
