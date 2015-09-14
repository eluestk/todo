(() => {
  'use strict';
  
  class DetailPageCtrl {
    constructor($scope, $routeParams, TodoMainService, TodoHelper) {
      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoHelper = TodoHelper;
      
      this.itemId = $routeParams.id;
      
      this.model = {
        tempTodo: {
          title: '',
          priority: 1,
          detail: '',
          isDone: false
        },
        todo: this.todoMainService.getTodo(this.itemId)
      }
           
    };
    
    initInput() {
      this.todoMainService.getTodo(this.itemId);
      this.model.ids;
    };
    
    updateTodo() {
      this.todoMainService;
    };
    
  };
  
  DetailPageCtrl.$inject = ['$scope', '$routeParams', 'TodoMainService', 'TodoHelper']
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
      
  
})();
