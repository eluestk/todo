(() => {
  'use strict';
  
 class Todo {
    constructor(id, title, priority, detail) {
      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
    }
    update(title, priority, detail) {
      // Todoオブジェクトをアップデートする
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      // localStorageの内容をアップデートする
      let todo = app.common.toLocalStorageTodo(title, priority, detail);
      localStorage.setItem(this.id, JSON.stringify(todo));
    }
  };
  
  angular.module('todoApp').service('TodoItemService', [Todo]);
  
})();