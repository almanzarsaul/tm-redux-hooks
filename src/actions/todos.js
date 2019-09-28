import API from 'goals-todos-api';

// Constants
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Action that adds a todo
const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

// Action that deletes a Todo
const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

// Action that toggles the completed value of a Todo
const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export function handleAddTodo(name, cb) {
  return dispatch =>
    API.saveTodo(name)
      .then(todo => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => alert('There was an error. Try again.'));
}

export function handleRemoveTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert('There was an error. Try again.');
    });
  };
}

export function handleToggleTodo(id) {
  return dispatch => {
    dispatch(toggleTodo(id));
    API.saveTodoToggle(id).catch(() => {
      alert('There was an error. Try again.');
      dispatch(toggleTodo(id));
    });
  };
}
