export class Todo{
    // Para convertir los objetos en instancias 
    static fromJson({id, tarea, completado, creado}){ // estoy utilizando la destructuracion de objetos

        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }
   
    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.creado =  new Date();

    }
}