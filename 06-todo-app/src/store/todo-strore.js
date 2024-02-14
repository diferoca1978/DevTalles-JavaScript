import { Todo } from "../todos/models/todo-model";

/* This is my state manage  */


const Filters = {

    All: 'all',
    Completed : 'Completed',
    Pending : 'Pending',

}


const state = {

    todos: [
        new Todo('Soul stone'),
        new Todo('Infinity stone'),
        new Todo('Time stone'),
        new Todo('Phylosophy stone'),
        new Todo('Power stone'),

    ],

    filter: Filters.All

}

const initStore = () => {

    console.log('Init store 🥑');

}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All) => {
    
    switch ( filter ) {
        case Filters.All:
             return [...state.todos]; 
        
        case Filters.Completed:
             return state.todos.filter( todo => todo.done); // Here we're generating a new array through the filter method where the todo.done === true.

        case Filters.Pending:
             return state.todos.filter( todo => !todo.done); // Here we're generating a new array through the filter method where the todo.done === false.

        default:
             throw new Error(`Option ${filter} not valid!!`);
    }
}

const addTodo = ( description ) => {
    
    if (!description) throw new Error('Description is necessary');

    state.todos.push(new Todo( description ))
}

const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });  
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);    
}

const deleteTodosImplemented = () => {
    state.todos = state.todos.filter( todo => todo.done);    
}

const setSelectedFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;    
}

const getCurrentFilter = () => {
    return state.filter;    
}


export default { // Here we are exporting an object wthit the function initStore()
    addTodo,
    deleteTodo,
    deleteTodosImplemented,
    getCurrentFilter,
    getTodos,   
    initStore,
    loadStore,
    setSelectedFilter,
    toggleTodo,
}