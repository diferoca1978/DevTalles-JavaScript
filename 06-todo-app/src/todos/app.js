import html from './app.html?raw';
/* The line importing the contents of the `app.html` file as a
string. The `?raw` part of the import statement is used to indicate that the file should be imported
as a raw string, rather than as a module. This allows the JavaScript code to access the contents of
the HTML file and use it in the application. */


/**
 * The function creates a div element with the text "Hola mundo" and appends it to the element with the
 * specified ID.
 * @param {String} elementId - The `elementId` parameter is a string that represents the id of the HTML element
 * where the app will be appended.
 */
export const App = ( elementId ) => {


    (()=>{

        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector( elementId ).append( app );

    })()
 
}