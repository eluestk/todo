(() => {
  'use strict';
  
  class DetailPageCtrl {
    constructor($scope, $routeParams, TodoMainService, TodoVOService) {
      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoVoService = TodoVOService;
      
      this.itemId = $routeParams.id;
      
      this.model = {
        tempTodo: {
          title: '',
          priority: 1,
          detail: ''
        },
        todo: this.todoMainService.getTodo(this.itemId)
      }
      
      $scope.model = this.model;
      
    };
    
    updateTodo() {
      // this.todoMainService;
    }
    
  };
  
  DetailPageCtrl.$inject = ['$scope', '$routeParams', 'TodoMainService', 'TodoVOService']
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
      
  
})();
