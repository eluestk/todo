namespace todo.services {
 
 export class Todo {
 
    constructor(
      public id: string,
      public title: string,
      public priority: number,
      public detail: string,
      public isDone: boolean)
    {
      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      this.isDone = isDone;
    }
    
    loadFromLocalStorage() {
      if (!this.id) throw new Error('idが設定されていない');
      let todo = JSON.parse(localStorage.getItem(this.id));
      this.title = todo.title;
      this.priority = todo.priority;
      this.detail = todo.detail;
      this.isDone = todo.isDone;
    }
 
    updateTodo(): void {
      // localStorageの内容をアップデートする
      let todo = {
        title: this.title,
        priority: this.priority,
        detail: this.detail,
        isDone: this.isDone};
      localStorage.setItem(this.id, JSON.stringify(todo));
    }    
  };    
    
  export class TodoService {
    getClass() {
      return Todo;
    };
    
    getInstance(
      id: string,
      title?: string,
      priority?: number,
      detail?: string,
      isDone?: boolean): Todo
    {
      return new Todo(id, title, priority, detail, isDone);
    };
    
    getTodoFromLocalStorage(id: string) {
      let todo = JSON.parse(localStorage.getItem(id));
      let todoItem = {
        id: todo.id,
        title: todo.title,
        priority: todo.priority,
        detail: todo.detail,
        isDone: todo.isDone
      };
     return todoItem;
    }

  };
  angular.module('todoApp').service('TodoService', TodoService);
}