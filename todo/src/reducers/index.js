import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: TodosReducer,
    activeTodos: ActiveTodos,
})

export default rootReducer;