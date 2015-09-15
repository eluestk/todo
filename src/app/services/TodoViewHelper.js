(()=>{
  class TodoViewHelper {
    
    getDoneIds(todos) {
      let doneTodos = todos.filter((todo) => {
        return todo.isDone;
      });
      let doneIds = [];
      doneTodos.forEach((todo) => {
        doneIds.push(todo.id);
      });
      return doneIds;
    };
    
    removeTodo(targetTodos, removeIds) {
      for (var i = 0; i < targetTodos.length; i++) {
        for (var j = 0; j < removeIds.length; j++) {
          if (targetTodos[i].id === removeIds[j]) {
            targetTodos.splice(i, 1);
            i--;
            break;
          }
        }
      }
    };
    
  }
  angular.module('todoApp').service('TodoViewHelper', TodoViewHelper);
})();