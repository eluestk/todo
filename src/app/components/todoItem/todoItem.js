(() => {
  'use strict';
  
  class TodoItemCtrl {
    constructor() {
      // this.model = null;
      this.test = 'hogehogeg'
    }
  };
  
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
  
  angular.module('todoApp').directive('todoItem', [todoItem]);
})();