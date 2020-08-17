import { createStore } from "redux";

//action generators: functions that return action objects

//---------------------------------------------------------------------------------------------------//

//Action Generators, these return (objects)

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
  count: 0,
});

//---------------------------------------------------------------------------------------------------

// Reducers
// 1. reducers are pure functions
// 2. do not interact with things outside of its own scope
// 3. only use previous state and action to determine new state
// 4. never change state or action inside the function

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.count,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

//---------------------------------------------------------------------------------------------------

const store = createStore(countReducer);

//store.sub function gets called every time store changes//
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 200 }));

store.dispatch(resetCount());
