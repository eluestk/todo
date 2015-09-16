namespace todo.pages.detail { 

  import TodoMainService = todo.services.TodoMainService;
  import TodoHelper = todo.services.TodoHelper;
  import Todo = todo.services.TodoVO;

  interface DetailPageCtrlParam extends ng.route.IRouteParamsService {
    id: string;
  }

  class DetailPageCtrl {
    
    private title: string;
    private todoMainService: TodoMainService;
    private todoHelper: TodoHelper;
    private itemId: string;
    private todo: Todo;
    private model: any;
    
    
    constructor(
      $scope: ng.IScope,
      $routeParams: DetailPageCtrlParam, 
      TodoMainService: TodoMainService,
      TodoHelper: TodoHelper) 
    {
      
      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoHelper = TodoHelper;
      
      this.itemId = $routeParams.id;
      
      this.todo = this.todoMainService.getTodo(this.itemId);
      
      this.model = {
        todoInputForm: {
          confirmedTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          tempTodo: {
            title: this.todo.title,
            priority: this.todo.priority,
            detail: this.todo.detail
          },
          buttonName: 'update'
        }
        
        
      };
      $scope.$watch('vm.model.todoInputForm.confirmedTodo', (todoItem: Todo, oldItem: Todo) => {
        if (todoItem !== oldItem) {
          let todoUpdateItem = {
            id: this.itemId,
            title: todoItem.title,
            priority: todoItem.priority,
            detail: todoItem.detail,
            isDone: this.todo.isDone
          }
          this.todoMainService.updateTodo(todoUpdateItem);
          alert('updated!');
        }    
      });     
    };
    
    initInput(): void {
      this.todoMainService.getTodo(this.itemId);
      this.model.ids;
    };
    
    updateTodo(): void {
      this.todoMainService;
    };
    
  };


  DetailPageCtrl.$inject = ['$scope', '$routeParams', 'TodoMainService', 'TodoHelper']
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
}
