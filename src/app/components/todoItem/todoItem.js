(() => {
  'use strict';
  
  class TodoItemCtrl {
    constructor() {
      alert('hgoe')
    }
    updateChecks(event) {
      alert(event);
    }
  };
  TodoItemCtrl.$inject = [];
  
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
})();