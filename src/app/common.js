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
      let item = app.common.setItem(todoItem.title, todoItem.priority, todoItem.detail);;
      localStorage.setItem(todoItem.id, JSON.stringify(item));
    }
    remove(todoItemIds) {
      // localStorageから消す
      for(let i = 0; i < todoItemIds.length; i++) {
        localStorage.removeItem(todoItemIds[i]);
      }
    }
    getTodos() {
      return this.todoItems;
    }
  };
  
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
      let item = app.common.setItem(title, priority, detail);
      localStorage.setItem(this.id, JSON.stringify(item));
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
    getURLParam: function getURLParam(param) {
      let pageURL = window.location.search.substring(1);
      let URLvars = pageURL.split('&');
      for (var i = 0; i < URLvars.length; i++) {
        let paramName = URLvars[i].split('=');
        if (paramName[0] === param) {
          return paramName[1];
        }
      }
    },
    Todos,
    Todo
  };
})();
