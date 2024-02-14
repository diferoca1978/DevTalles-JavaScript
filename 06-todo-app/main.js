import './style.css'
import { App } from './src/todos/app';
import todoStore from "./src/store/todo-strore"; // Here we are importing the whole object under the name todoStore.

todoStore.initStore() // Here we are calling the initStore function.  

App('#app')
