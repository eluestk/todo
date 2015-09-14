(() => {
  'use strict';
  
 class TodoMainService {
    constructor(TodosService, TodoService, TodoVOService, TodoHelper) {
      this.todosService = TodosService;
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      this.todos;
      this.todo;
    };
       
    getTodos() {
      this.todos = this.todosService.getInstance();
      this.todos.todoVOItems = [];
      this.todos.todoItems.forEach((todoItem) => {
        this.todos.todoVOItems.push(this.todoHelper.toTodoVO(todoItem));
      });
      return this.todos.todoVOItems;
    };
    
    getTodo(id) {
      this.todos = this.todosService.getInstance();
      this.todos.todoItems.forEach((item) => {
        item.id = id;
      });
    };
    
    // todoListとLocalStorageに新しいtodoItemを追加する
    addTodo(title, priority, detail) {
      let todoItem = {
        id: Date.now().toString(),
        title: title,
        priority: priority,
        detail: detail,
        isDone: false
      }
      this.todos.add(todoItem);
    };
    
    // todoListとLocalStorageからtodoItemを削除する
    removeTodos(todoItemIds) {
      this.todos.remove(todoItemIds);
    };
    
    updateTodo(todoItem) {
      this.todoService.getInstance(
        todoItem.id,
        todoItem.title,
        todoItem.priority,
        todoItem.detail,
        todoItem.isDone)
        .updateTodo();
    };
  };
  
  TodoMainService.$inject = ['TodosService', 'TodoService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
})();