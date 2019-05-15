const addTodoId = 0;

export const addTodos = text => {
    return {
        type: "ADD_TODO",
        id: addTodoId++,
        text
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: "SET_VISIBILITY",
        filter
    };
};

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id
    };
};