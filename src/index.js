const redux = require("redux");

// Actions
const ADD = "ADD TODOS";
const TOGGLE = "TOGGLE TODOS";

// Action Creator
// Action creators in Redux are functions
// that generate and return action objects
// (type,payload-data)
const addtoDo = (text) => ({ text, type: ADD });
const toggletoDo = (index) => ({ index, type: TOGGLE });

// initialSatate
const initialState = {
  todos: []
};

// ADD,TODO-action dispatched
//must return updated state
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((elem, idx) => {
          if (idx === action.index) {
            elem.completed = !elem.completed;
          }
          return elem;
        })
      };
    default:
      return state;
  }
}

// The createStore method accepts a reducer function
// as an argument and creates a store object

// create store
const store = redux.createStore(todoReducer);

// dispatch method to dispatch actions
// dispatch action
store.dispatch(addtoDo("Hello there"));
store.dispatch(addtoDo("How are u"));
store.dispatch(toggletoDo(0));

// getState method to access the current state of the application.
//Read data from store
console.log(store.getState());
