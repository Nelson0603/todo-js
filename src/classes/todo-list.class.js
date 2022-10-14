import {Todo} from './todo.class'
export class TodoList {

    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id )
        this.guardarLocalStorage();

    }

    marcarCompletado(id){

        for (const todo of this.todos){

            if (todo.id == id )

            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
        }

    }

    eliminarCompletados(){

        this.todos = this.todos.filter(todo => !todo.completado );
        this.guardarLocalStorage(); // aca estamos aplicadon el guardado en eliminarcompletados.

    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos)); // Estamos creando una llave llamada todo y  un valor llamado this.todos.
                                                                 //  JSON.stringify convierte  el objeto en un json para poder leerlo  

   }
   
   cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo')) // Arreglo de objetos
                        :[]; // Le aplicamos el JSON.parse para poder convertir el string a un Objeto y poder ingresar la informacion   
   
        this.todos = this.todos.map(obj => Todo.fromJson(obj)) //"map" barrar todos los objetos de un arreglo y devolver un arreglos de sus objetos mutados 
                    }                                          // Todo.fromJson asi llamamos  una clase estatica (obj) hace referencias a cada una de las variables id, tarea etc







}