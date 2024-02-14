

/**
 * The function `createTodo` takes a `todo` object as a parameter and creates an HTML element with the
 * description of the todo.
 * @param todo - The parameter "todo" is an object that represents a todo item. It should have a
 * "description" property that contains the description of the todo item.
 */

export const createTodoHtml = ( todo ) => {
     if (! todo ) throw new Error(' A todo object is required ');

    const { done, description, id} = todo;
     
     const html = 
     `
        <div class="view">
            <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
            <label>${ description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
     `;
     
     const liElement = document.createElement('li');
     liElement.innerHTML = html;
     liElement.setAttribute('data-id', id)

    if ( todo.done ) 
        liElement.classList.add('completed')


     return liElement;

}