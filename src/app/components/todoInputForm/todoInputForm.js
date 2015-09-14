(() => {
  'use strict';

  class TodoInputFormCtrl {
    onAdd() {
      this.model.confirmedTodo = {
        title: this.model.tempTodo.title,
        priority: this.model.tempTodo.priority,
        detail: this.model.tempTodo.detail
      };
    }
  }
  
  TodoInputFormCtrl.$inject = [];
  
  let todoInputForm = () => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoInputForm/todoInputForm.html',
      controller: TodoInputFormCtrl,
      controllerAs: 'vm',
      scope: {
        model: '='
      },
      bindToController: true,
      link: (scope, iElement, iAttrs, controller, transcludeFn) => {
        console.dir(scope);
      }
    };
  }
  
  angular.module('todoApp')
    .directive('todoInputForm', todoInputForm);
})();