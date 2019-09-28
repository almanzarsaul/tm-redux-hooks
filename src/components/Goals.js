import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import { handleAddGoal, handleRemoveGoal } from '../actions/goals';

const Goals = () => {
  const input = React.useRef('');
  const goals = useSelector(state => state.goals);
  const dispatch = useDispatch();

  const addItem = e => {
    e.preventDefault();
    dispatch(handleAddGoal(input.value, () => (input.current = '')));
  };

  const removeItem = goal => {
    dispatch(handleRemoveGoal(goal));
  };

  return (
    <div>
      <h1>Goal List</h1>
      <input type='text' placeholder='Add Goal' ref={input} />
      <button onClick={addItem}>Add Goal</button>
      <List items={goals} removeItem={removeItem} />
    </div>
  );
};

export default Goals;
