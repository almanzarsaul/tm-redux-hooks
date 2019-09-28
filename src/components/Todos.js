import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo
} from '../actions/todos';
import List from './List';

const Todos = () => {
  const input = React.useRef('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addItem = e => {
    e.preventDefault();
    dispatch(handleAddTodo(input.current, () => (input.current = '')));
  };
  const removeItem = todo => dispatch(handleRemoveTodo(todo));

  const toggleItem = id => dispatch(handleToggleTodo(id));

  return (
    <div>
      <h1>Todo List</h1>
      <input type='text' placeholder='Add Todo' ref={input} />
      <button onClick={addItem}>Add Todo</button>

      <List items={todos} toggleItem={toggleItem} removeItem={removeItem} />
    </div>
  );
};

export default Todos;

// class Todos extends React.Component {
//   addItem = e => {
//     e.preventDefault();
//     this.props.dispatch(
//       handleAddTodo(this.input.value, () => {
//         this.input.value = '';
//       })
//     );
//   };

//   removeItem = todo => this.props.dispatch(handleRemoveTodo(todo));

//   toggleItem = ({ id }) => this.props.dispatch(handleToggleTodo(id));

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <input
//           type='text'
//           placeholder='Add Todo'
//           ref={input => (this.input = input)}
//         />
//         <button onClick={this.addItem}>Add Todo</button>

//         <List
//           items={this.props.todos}
//           toggleItem={this.toggleItem}
//           removeItem={this.removeItem}
//         />
//       </div>
//     );
//   }
// }

// export default connect(state => ({
//   todos: state.todos
// }))(Todos);
