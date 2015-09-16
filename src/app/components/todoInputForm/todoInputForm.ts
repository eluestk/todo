namespace todo.components.todoInputForm {

  class TodoInputFormCtrl {
    
    public model: any;
    
    onAdd(): void {
      if (!this.model.tempTodo.title) {
        alert('件名を入力してください');
      } else {
        this.model.confirmedTodo = {
          title: this.model.tempTodo.title,
          priority: this.model.tempTodo.priority,
          detail: this.model.tempTodo.detail
        };
      }
    }
  }
  
  let todoInputForm = () => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/todoInputForm/todoInputForm.html',
      controller: TodoInputFormCtrl,
      controllerAs: 'vm',
      scope: {
        model: '='
      },
      bindToController: true
    };
  }
  
  angular.module('todoApp')
    .directive('todoInputForm', todoInputForm);
}