var app = app || {};

(function() {
  'use strict';
  
  class Todos {
    
    constructor() {
      // localStrageからitemを読む
      this.todoItems = [];
      
      for (let i = 0; i < localStorage.length; i++) {
        let itemKey = localStorage.key(i);
        if (/[0-9]{13}/.test(itemKey)) {
          let item = JSON.parse(localStorage.getItem(itemKey));
          let todoItem = new Todo(itemKey, item.title, item.priority, item.detail);
          this.todoItems.push(todoItem);
        }
      }
    }
    add(todoItem) {
      // todoItems.push(todoItem);
      this.todoItems.push(todoItem);
      // localStorageに書き込む
      localStorage.setItem(Date.now().toString(), JSON.stringify(todoItem));
    }
    remove(todoItemId) {
      // for(); TODO
      // localStorageから消す
      for(let i = 0; i < 1; i++) {
        
      }
    }
    getTodos() {
      return this.todoItems;
    }
  };
  
  class Todo {
    constructor(id, title, priority, descrption) {
      // 初期化
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail;
    }
    update(title, priority, detail) {
      // Todoオブジェクトをアップデートする
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      // localStorageの内容をアップデートする
      let item = app.common.setItem(title, priority, detail);
      localStorage.setItem(this.id, item);
    }
  };
  
  app.common = {
    // itemをセットします
    setItem: function setItem(title, priority, detail) {
      let item = {
        title,
        priority,
        detail
      };
    
      return item;
    },
    getItem: function getItem() {
      
    },
    Todos,
    Todo
  };
})();
