namespace todo.services {
   
  export class TodoViewHelper {
    
    getDoneIds(todos: string[]): string[] {
      let doneTodos = todos.filter((todo: any) => {
        return todo.isDone;
      });
      let doneIds: string[] = [];
      doneTodos.forEach((todo: any) => {
        doneIds.push(todo.id);
      });
      return doneIds;
    };
    
    removeTodo(
      targetTodos: any,
      removeIds: string[]): void {
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
}