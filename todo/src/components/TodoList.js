import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
  
//   TodoList.propTypes = {
//     todos: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//       }).isRequired
//     ).isRequired,
//     onTodoClick: PropTypes.func.isRequired
//   };

  const mapStateToProps = (state) => {
      return {
         todos: state.todos
      }
  }

  export default connect(mapStateToProps, {})(TodoList);
  