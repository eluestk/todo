(() => {
  'use strict';
  class ListPageCtrl {
    constructor($scope, TodoMainService, TodoVOService, TodoViewHelper, TodoHelper) {
      
      this.title = 'TODO:List';
      this.todoMainService = TodoMainService;
      this.todoVoService = TodoVOService;
      this.todoViewHelper = TodoViewHelper;
      this.todoHelper = TodoHelper;
 
      this.todoMainService.clearTodos();

      this.model = {
        todoInputForm: {
          confirmedTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          tempTodo: {
            title: '',
            priority: 1,
            detail: ''
          },
          buttonName: 'add'
        },
        todos: this.todoMainService.getTodos()
      };
 
      $scope.$watch('vm.model.todoInputForm.confirmedTodo', (todoItem, oldItem) => {
        if (todoItem === oldItem) {
          return;
        }
        let todoVO = this.todoHelper.toTodoVO(todoItem);
        this.todoMainService.addTodo(todoVO);
        this.model.todos.push(todoVO);
        this.clearTodoInputForm();
      });
    }
    
    setDummy() {
      let item = {
        title: 'TEST',
        priority: 1,
        detail: 'description goes here',
        isDone: false
      }
      localStorage.setItem(Date.now().toString(), JSON.stringify(item));
    }
    
    clearTodoInputForm() {
      this.model.todoInputForm.tempTodo.title = '';
      this.model.todoInputForm.tempTodo.priority = 1;
      this.model.todoInputForm.tempTodo.detail = '';
    }
  }

  ListPageCtrl.$inject = [
    '$scope','TodoMainService', 'TodoVOService', 'TodoViewHelper', 'TodoHelper'];

  angular.module('todoApp').controller('ListPageCtrl', ListPageCtrl);
})();
