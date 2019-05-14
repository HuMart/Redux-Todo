import { combineReducers } from 'redux';

const todoApp = combineReducers({
    todos: TodosReducer,
    activeTodos: ActiveTodos,
})

export default todoApp;