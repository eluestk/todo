(() => {
  'use strict';
  
  class DetailPageCtrl {
    constructor($scope, $routeParams, TodoMainService, TodoHelper) {
      
      this.title = 'TODO:Detail';
      this.todoMainService = TodoMainService;
      this.todoHelper = TodoHelper;
      
      this.itemId = $routeParams.id;
      
      this.todo = this.todoMainService.getTodo(this.itemId);
      
      this.model = {
        todoInputForm: {
          confirmedTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          tempTodo: {
            title: this.todo.title,
            priority: this.todo.priority,
            detail: this.todo.detail
          },
          buttonName: 'update'
        }
        
        
      };
      $scope.$watch('vm.model.todoInputForm.confirmedTodo', (todoItem, oldItem) => {
        if (todoItem !== oldItem) {
          let todoUpdateItem = {
            id: this.itemId,
            title: todoItem.title,
            priority: todoItem.priority,
            detail: todoItem.detail,
            isDone: this.todo.isDone
          }
          this.todoMainService.updateTodo(todoUpdateItem);
          alert('updated!');
        }    
      });     
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
