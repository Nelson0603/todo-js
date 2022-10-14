import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));
//todoList.todos.forEach( crearTodoHtml); cuando vamos a enviar un solo argumento  y la funcion va a recibir un solo argumento podemos oviarlo

/*
const tarea = new Todo('Aprender  javascript');
todoList.nuevoTodo(tarea);


console.log(todoList);

crearTodoHtml(tarea);

*/


// Gracias a que convertimos los objetos a instancias ya podemos hacer eso.
const newTodo = new Todo('Aprender Javascript');
todoList.todo[0].imprimirClase();
console.log('todos', todoList.todos);