class TodoController {
    constructor(service, view) {
        this.onTodoListChanged = todos => {
            this.view.displayTodos(todos);
        };
        this.handleAddTodo = todoText => {
            this.service.addTodo(todoText);
        };
        this.handleEditTodo = (id, todoText) => {
            this.service.editTodo(id, todoText);
        };
        this.handleDeleteTodo = id => {
            this.service.deleteTodo(id);
        };
        this.handleToggleTodo = id => {
            this.service.toggleTodo(id);
        };
        this.service = service;
        this.view = view;
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        this.onTodoListChanged(this.service.todos);
    }
}
