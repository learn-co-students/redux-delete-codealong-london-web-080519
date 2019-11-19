import actions from './actions.js'
import uuid from "uuid";

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case actions.ADD_TODO:

      return { todos: state.todos.concat({id: uuid(), text: action.payload.text}) };
  

    case actions.DELETE_TODO:

      return { todos: state.todos.filter(todo => todo.id !== action.payload) };

    default:
      return state;
  }
}
