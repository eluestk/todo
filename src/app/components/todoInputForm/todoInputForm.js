(() => {
  'use strict';
  
  let todoInputForm = (() => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoInputForm/todoInputForm.html'
    };
  })
  
  angular.module('todoApp').directive('todoInputForm', todoInputForm);
})();