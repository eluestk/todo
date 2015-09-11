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
      targetTodos = targetTodos.filter((todo) => {
        let check = 0;
        removeIds.forEach((removeId) => {
          if (todo.id === removeId) { check++ }
        });
        return !check;
      });
    };
    
  }
  angular.module('todoApp').service('TodoViewHelper', TodoViewHelper);
})();