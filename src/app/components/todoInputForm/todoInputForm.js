(() => {
  'use strict';

  class TodoInputFormCtrl {
    constructor() {
      console.log(this.model);
    }
    onAdd() {
      alert('hoge')
    }
  }
  
  TodoInputFormCtrl.$inject = [];
  
  let todoInputForm = () => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoInputForm/todoInputForm.html',
      controller: TodoInputFormCtrl,
      controllerAs: 'vm',
      scope: true,
      bindToController: {
        model: '='
      }
    };
  }
  
  angular.module('todoApp')
    .directive('todoInputForm', todoInputForm);
})();