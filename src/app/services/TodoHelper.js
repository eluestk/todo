(() => {
  'use strict';
  
  class TodoHelper {
    constructor(TodoService, TodoVOService) {
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
    }
    
    toTodoVO(todoItem) {
      return this.todoService.getInstance(
        todoItem.id,
        todoItem.title,
        todoItem.priority,
        todoItem.detail,
        todoItem.isDone
      );
    };
    
    toTodo(todoVO) {
      return this.todoService.getInstance(
        todoVO.id,
        todoVO.title,
        todoVO.priority,
        todoVO.detail,
        todoVO.isDone
      );
    };
  };
  
  TodoHelper.$inject = ['TodoService', 'TodoVOService'];
  angular.module('todoApp').service('TodoHelper', TodoHelper);
})();