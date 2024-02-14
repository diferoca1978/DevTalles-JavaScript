import html from './app.html?raw'; /* The line importing the contents of the `app.html` file as a string. The `?raw` part of the import statement is used to indicate that the file should be imported as a raw string, rather than as a module. This allows the JavaScript code to access the contents of
the HTML file and use it in the application. */


import todoStrore from '../store/todo-strore';
import { renderTodos } from './uses-cases';

const elementsID = {
    Todolist: '.todo-list'
}

/**
 * The `displayTodos` function retrieves todos from the todoStore and renders them.
 * @param elementId - The `elementId` parameter is the ID of the HTML element where the todos will be
 * displayed.
 */
export const App = ( elementId ) => {

    const displayTodos = () => {

        const todos = todoStrore.getTodos( todoStrore.getCurrentFilter());
        renderTodos( elementsID.Todolist, todos);

    }


    (()=>{

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();

    })()
 
}