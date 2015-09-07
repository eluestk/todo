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
      let todo = app.common.toLocalStorageTodo(title, priority, detail);
      localStorage.setItem(this.id, JSON.stringify(todo));
    }
  };
  
  app.common = {
    // itemをセットします
    toLocalStorageTodo: function toLocalStorageTodo(title, priority, detail) {
      let item = {
        title,
        priority,
        detail
      };
    
      return item;
    },
    getItem: function getItem() {
      
    },
    getURLParamValue: function getURLParamValue(targetParamName) {
      let searchStr = window.location.search.substring(1);
      let searchStrItems = searchStr.split('&');
      let targetParamValue;
      searchStrItems.forEach((searchStrItem) => {
        let splitItem = searchStrItem.split('=');
        if (splitItem[0] === targetParamName) {
          targetParamValue = splitItem[1];
        }        
      });
      if (!targetParamValue) throw new Error('idない');
      return targetParamValue;
    },
    Todos,
    Todo
  };
})();
