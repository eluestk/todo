namespace todo.components.todoItem {
 
  import TodoMainService = todo.services.TodoMainService;
  import TodoHelper = todo.services.TodoHelper;
 
  class TodoItemCtrl {
    
    private todoMainService: TodoMainService;
    private todoHelper : TodoHelper;
    public model: any;
    
    constructor(
      $scope: ng.IScope,
      TodoMainService: TodoMainService,
      TodoHelper: TodoHelper)
    {
      this.todoMainService = TodoMainService;
      this.todoHelper = TodoHelper;
    
      $scope.$watch('vm.model.isDone', (newVal, oldVal) => {
        if ((newVal !== oldVal)) {
          this.todoMainService.updateTodo(this.todoHelper.toTodo(this.model));
        }
      });
    };
  };
  
  TodoItemCtrl.$inject = ['$scope', 'TodoMainService', 'TodoHelper'];
  
  let todoItem = () => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoItem/todoItem.html',
      controller: TodoItemCtrl,
      controllerAs: 'vm',
      scope: true,
      bindToController: {
        model: '='
      }
    };
  };
  
  angular.module('todoApp').directive('todoItem', todoItem);
}