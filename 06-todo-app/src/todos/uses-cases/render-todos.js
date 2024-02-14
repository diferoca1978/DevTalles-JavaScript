import { Todo } from "../models/todo-model";
import { createTodoHtml } from "./create-todo-html";

let element;


/**
 * The function `renderTodos` is used to render a list of todos onto a specified element in the HTML
 * document.
 * @param {string} elementID - The ID of the HTML element where the todos will be rendered.
 * @param {Todo} [todos] - The `todos` parameter is an array that contains the list of todos. Each todo item
 * in the array can be an object with properties like `id`, `title`, `completed`, etc.
 */
export const renderTodos = ( elementID, todos = [] ) => {
    
    if (!element) {
        element =  document.querySelector( elementID );
    }

    if (!element) {
        throw new Error(`Element ${ elementID } not found`);
    }

    element.innerHTML = '';

    todos.forEach( todo  => {
        
      element.append( createTodoHtml(todo))  

    });

}
