namespace todo.services {

  export class TodoHelper {
    
    private todoService: TodoService;
    private todoVOService: TodoVOService;
    
    constructor(
      TodoService: TodoService,
      TodoVOService: TodoVOService)
    {
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
    }
    
    toTodoVO(todoItem: Todo): TodoVO {
      return this.todoVOService.getInstance(
        todoItem.id,
        todoItem.title,
        todoItem.priority,
        todoItem.detail,
        todoItem.isDone
      );
    };
    
    toTodo(todoVO: TodoVO): Todo {
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
}