namespace todo.pages.list {
  
  import TodoMainService = todo.services.TodoMainService;
  import TodoVOService = todo.services.TodoVOService;
  import TodoViewHelper = todo.services.TodoViewHelper;
  import TodoHelper = todo.services.TodoHelper;
  import Todo = todo.services.Todo;
  
  class ListPageCtrl {
    
    private title: string;
    private todoMainService: TodoMainService;
    private todoVOService: TodoVOService;
    private todoViewHelper: TodoViewHelper;
    private todoHelper: TodoHelper;
    private model: any;
    
    constructor(
      $scope: ng.IScope,
      TodoMainService: TodoMainService,
      TodoVOService: TodoVOService,
      TodoViewHelper: TodoViewHelper,
      TodoHelper: TodoHelper)
    {
      
      this.title = 'TODO:List';
      this.todoMainService = TodoMainService;
      this.todoVOService = TodoVOService;
      this.todoViewHelper = TodoViewHelper;
      this.todoHelper = TodoHelper;
 
      this.todoMainService.clearTodos();

      this.model = {
        todoInputForm: {
          confirmedTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          tempTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          buttonName: 'add'
        },
        todos: this.todoMainService.getTodos()
      };
 
      $scope.$watch('vm.model.todoInputForm.confirmedTodo', (todoItem: Todo, oldItem: Todo) => {
        if (todoItem === oldItem) {
          return;
        }
        let todoVO = this.todoHelper.toTodoVO(todoItem);
        this.todoMainService.addTodo(todoVO);
        this.model.todos.push(todoVO);
        this.clearTodoInputForm();
      });
    }

    clearTodoInputForm(): void {
      this.model.todoInputForm.tempTodo.title = '';
      this.model.todoInputForm.tempTodo.priority = 1;
      this.model.todoInputForm.tempTodo.detail = '';
    }
  }

  ListPageCtrl.$inject = [
    '$scope','TodoMainService', 'TodoVOService', 'TodoViewHelper', 'TodoHelper'];

  angular.module('todoApp').controller('ListPageCtrl', ListPageCtrl);
}