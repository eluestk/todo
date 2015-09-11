(() => {
  'use strict';
  
 class TodoMainService {
    constructor(TodosService, TodoVOService, TodoHelper) {
      this.todosService = TodosService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      this.todos;
      this.todo;
    };
       
    getTodos() {
      this.todos = this.todosService.getInstance();
      return this.todos.todoItems;
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
    
    // todoListとLocalStorageのtodoItemを更新する
    updateTodo(todoItem) {
      
    };
  };
  
  TodoMainService.$inject = ['TodosService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
})();