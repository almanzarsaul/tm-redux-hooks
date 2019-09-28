import API from 'goals-todos-api';

export const RECIEVE_DATA = 'RECIEVE_DATA';

const recieveData = (todos, goals) => ({
  type: RECIEVE_DATA,
  todos,
  goals
});

export function handleInitialData() {
  return dispatch => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => dispatch(recieveData(todos, goals))
    );
  };
}
