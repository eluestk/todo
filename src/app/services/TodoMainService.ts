namespace todo.services {
  
  export class TodoMainService {
    
    private todosService: TodosService;
    private todoService: TodoService;
    private todoVOService: TodoVOService;
    private todoHelper: TodoHelper;
    // public todo: any;
    
    constructor(
      TodosService: TodosService,
      TodoService: TodoService,
      TodoVOService: TodoVOService,
      TodoHelper: TodoHelper)
    {
      this.todosService = TodosService;
      this.todoService = TodoService;
      this.todoVOService = TodoVOService;
      this.todoHelper = TodoHelper;
      // this.todo;
    }
       
    getTodos(): Object[] {
      let todoVOItems: Object[] = [];
      this.todosService.getInstance().todoItems.forEach((todoItem: any) => {
        todoVOItems.push(this.todoHelper.toTodoVO(todoItem));
      });
      return todoVOItems;
    }
    
    getTodo(id: string): TodoVO {
      let todo = this.todoService.getInstance(id);
      todo.loadFromLocalStorage();
      return this.todoHelper.toTodoVO(todo);
    }
    
    // todoListとLocalStorageに新しいtodoItemを追加する
    addTodo(todoVO: TodoVO): void {
      const id = Date.now().toString();
 
      let todo = this.todoHelper.toTodo(todoVO);
      todo.id = id;
      todo.isDone = false;
 
      this.todosService.getInstance().add(todo);
 
      todoVO.id = id;
      todoVO.isDone = false;
    }
    
    // todoListとLocalStorageからtodoItemを削除する
    removeTodos(todoItemIds: string[]): void {
      this.todosService.getInstance().remove(todoItemIds);
    }
    
    updateTodo(todoItem: any): void {
      this.todoService.getInstance(
        todoItem.id,
        todoItem.title,
        todoItem.priority,
        todoItem.detail,
        todoItem.isDone)
        .updateTodo();
    }
    
    clearTodos(): void {
      this.todosService.clear();
    }
  };
  
  TodoMainService.$inject = ['TodosService', 'TodoService', 'TodoVOService', 'TodoHelper'];
  angular.module('todoApp').service('TodoMainService', TodoMainService);
}