(() => {
  'use strict';
  
  class TodoContainerCtrl {
    constructor(TodoMainService, TodoViewHelper) {
      this.todoMainService = TodoMainService;
      this.todoViewHelper = TodoViewHelper;
    }
    onArchiveTodo() {
      const doneIds = this.todoViewHelper.getDoneIds(this.model.todos);
      this.todoMainService.removeTodo(doneIds);
      this.todoViewHelper.removeTodo(this.model.todos, doneIds);
    }
  };
  TodoContainerCtrl.$inject = ['TodoMainService', 'TodoViewHelper'];
      
  let todoContainer = (() => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoContainer/todoContainer.html',
      controller: TodoContainerCtrl,
      controllerAs: 'vm',
      scope: true,
      transclude: true,
      bindToController: {
        model: '='
      }
    };
  })
  
  angular.module('todoApp').directive('todoContainer', todoContainer);
})();