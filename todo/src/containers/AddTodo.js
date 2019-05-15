import React from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodos(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state
  } 
}
AddTodo = connect(mapStateToProps,  {})(AddTodo);

export default AddTodo;
