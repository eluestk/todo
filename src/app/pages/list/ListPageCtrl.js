(() => {
  'use strict';
  class ListPageCtrl {
    constructor($scope, TodoMainService, TodoVOService, TodoViewHelper) {
      
      this.title = 'TODO:List';
      this.todoMainService = TodoMainService;
      this.todoVoService = TodoVOService;
      this.todoViewHelper = TodoViewHelper;
      
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
          }
        },
        todos: this.todoMainService.getTodos()
      };
      
      $scope.$watch('vm.model.todoInputForm.confirmedTodo', () => {
        // this.model.todos.push(this.model.todoInputForm.confirmedTodo);
      });
    }

    addTodo() {
      
      if(this.model.tempTodo.title) {
        let title = this.model.tempTodo.title;
        let priority = this.model.tempTodo.priority;
        let detail = this.model.tempTodo.detail;
        this.model.confirmedTodo = this.model.tempTodo;
        this.model.tempTodo.title = '';
        this.model.tempTodo.priority = 1;
        this.model.tempTodo.detail = '';
        
        this.todoMainService.addTodo(title, priority, detail);
      } else {
        alert('件名を入力してください');
      }
    };
    
    clrTodo() {
      if(confirm('erase all data?')) localStorage.clear();
    };
    
    updateChecks() {
      console.log('update me!!!')
    };
    
    setDummy() {
      let item = {
        title: 'TEST',
        priority: 1,
        detail: 'description goes here',
        isDone: false
      }
      localStorage.setItem(Date.now().toString(), JSON.stringify(item));
    }
  }
  ListPageCtrl.$inject = [
    '$scope','TodoMainService', 'TodoVOService', 'TodoViewHelper'];

  angular.module('todoApp').controller('ListPageCtrl', ListPageCtrl);
})();
