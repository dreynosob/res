class TodoService {
    todos: any[]
    constructor(){
     this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
        todo => new Todo(todo)
      );
    }
    
    bindTodoListChanged(callback:string):void {
      this.onTodoListChanged = callback;
    }
    _commit(todos:any) {
      this.onTodoListChanged(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(text:string) {
      this.todos.push(new Todo({text}));
      this._commit(this.todos)
    }
    editTodo(id:string, updatedtext: string) {
      this.todos = this.todos.map(todo =>
         todo.id === id 
         ? new Todo({
           ...todo,
           text:updatedtext
         })
         : todo
  
         );
  
         this._commit(this.todos);
    }
    
    deleteTodo(_id:string){
      this.todos = this.todos.filter(({id}) => id !== _id); 
        
        this._commit(this.todos)
    }
  
    toggleTodo(_id:string) {
      this.todos = this.todos.map(todo => 
        todo.id === _id ? new Todo(...todo, complete: !todo.complete) : todo);
        this._commit(this.todos);
    }
    
  }
  