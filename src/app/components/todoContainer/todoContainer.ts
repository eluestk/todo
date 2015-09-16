namespace todo.components.todoContainer {
  
  import TodoMainService = todo.services.TodoMainService;
  import TodoViewHelper = todo.services.TodoViewHelper;
  import Todo = todo.services.Todo;
  
  class TodoContainerCtrl {
    
    private todoMainService: TodoMainService;
    private todoViewHelper: TodoViewHelper;
    private doneCount: number;
    private model: any;
    
    constructor(
      $scope: ng.IScope,
      TodoMainService: TodoMainService,
      TodoViewHelper: TodoViewHelper)
    {
      this.todoMainService = TodoMainService;
      this.todoViewHelper = TodoViewHelper;
      
      $scope.$watch('vm.model', () => {
        let doneItems = this.model.filter((todo: Todo) => {
          return todo.isDone;
        });
        this.doneCount = doneItems.length;
      }, true);
    }
    
    onArchiveTodo(): void {
      const doneIds = this.todoViewHelper.getDoneIds(this.model);
      this.todoMainService.removeTodos(doneIds);
      this.todoViewHelper.removeTodo(this.model, doneIds);
    }
  };
  TodoContainerCtrl.$inject = ['$scope', 'TodoMainService', 'TodoViewHelper'];
      
  let todoContainer = (() => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoContainer/todoContainer.html',
      controller: TodoContainerCtrl,
      controllerAs: 'vm',
      transclude: true,
      scope: {
        model: '='
      },
      bindToController: true
    };
  })
  
  angular.module('todoApp').directive('todoContainer', todoContainer);
}