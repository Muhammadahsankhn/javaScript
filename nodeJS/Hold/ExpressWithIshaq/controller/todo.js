const todo = [];

const addTodo = (name) => {
    todo.push({name, done : false});
    return true;
}

const deleteTodo = (index) => {
    todo.splice(index,1);
    return true;
}

const markAsDone = (index) => {
    todo[index].done = true;
    return true;
}


const getAllTodos = () => {
    return todo;
}

module.exports = {
    addTodo,
    deleteTodo,
    markAsDone,
    getAllTodos
}