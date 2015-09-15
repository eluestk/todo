(() => {
  'use strict';
  
 class TodoMainService {
    constructor(TodosService, TodoService, TodoVOService, TodoHelper) {
      this.todosService = TodosService;
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      this.todo;
    }
       
    getTodos() {
      let todoVOItems = [];
      this.todosService.getInstance().todoItems.forEach((todoItem) => {
        todoVOItems.push(this.todoHelper.toTodoVO(todoItem));
      });
      return todoVOItems;
    }
    
    getTodo(id) {
      let todo = this.todoService.getInstance(id);
      todo.loadFromLocalStorage();
      return this.todoHelper.toTodoVO(todo);
    }
    
    // todoListとLocalStorageに新しいtodoItemを追加する
    addTodo(todoVO) {
      const id = Date.now().toString();
 
      let todo = this.todoHelper.toTodo(todoVO);
      todo.id = id;
      todo.isDone = false;
 
      this.todosService.getInstance().add(todo);
 
      todoVO.id = id;
      todoVO.isDone = false;
    }
    
    // todoListとLocalStorageからtodoItemを削除する
    removeTodos(todoItemIds) {
      this.todosService.getInstance().remove(todoItemIds);
    }
    
    updateTodo(todoItem) {
      this.todoService.getInstance(
        todoItem.id,
        todoItem.title,
        todoItem.priority,
        todoItem.detail,
        todoItem.isDone)
        .updateTodo();
    }
    
    clearTodos() {
      this.todosService.clear();
    }
  };
  
  TodoMainService.$inject = ['TodosService', 'TodoService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
})();