(() => {
  'use strict';
  
 class Todo {
    constructor(id, title, priority, detail, isDone) {
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
 
    updateTodo() {
      // localStorageの内容をアップデートする
      let todo = {
        title: this.title,
        priority: this.priority,
        detail: this.detail,
        isDone: this.isDone};
      localStorage.setItem(this.id, JSON.stringify(todo));
    }    
  };    
    
  class TodoService {
    getClass() {
      return Todo;
    };
    
    getInstance(id, title, priority, detail, isDone) {
      return new Todo(id, title, priority, detail, isDone);
    };
    
    getTodoFromLocalStorage(id) {
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
})();