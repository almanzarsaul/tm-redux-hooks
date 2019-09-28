import React, { useEffect } from 'react';
import Todos from './Todos';
import Goals from './Goals';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../actions/shared';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(handleInitialData());
    // eslint-disable-next-line
  }, []);

  if (loading) return <h3>Loading</h3>;

  return (
    <React.Fragment>
      <Todos />
      <Goals />
    </React.Fragment>
  );
};

export default App;
