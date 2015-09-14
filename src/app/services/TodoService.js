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
  };
  angular.module('todoApp').service('TodoService', TodoService);
})();