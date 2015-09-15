(() => {
  'use strict';
  
  class TodoContainerCtrl {
    constructor($scope, TodoMainService, TodoViewHelper) {
      this.todoMainService = TodoMainService;
      this.todoViewHelper = TodoViewHelper;
      
      $scope.$watch('vm.model', () => {
        let doneItems = this.model.filter((todo) => {
          return todo.isDone;
        });
        this.doneCount = doneItems.length;
      }, true);
    }
    
    onArchiveTodo() {
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
})();