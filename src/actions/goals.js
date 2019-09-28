import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// Action to add goal
const addGoal = goal => ({
  type: ADD_GOAL,
  goal
});

// Action to remove a goal
const removeGoal = id => ({
  type: REMOVE_GOAL,
  id
});

// Async function to handle saving goal to DB
export function handleAddGoal(name, cb) {
  return dispatch =>
    API.saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        cb();
      })
      .catch(() => alert('There was an error. Try again.'));
}

// Async function to handle deleting goal from DB.
export function handleRemoveGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));

    API.deleteGoal(goal.id).catch(() => {
      alert('There was an error. Try again.');
      dispatch(addGoal(goal));
    });
  };
}
