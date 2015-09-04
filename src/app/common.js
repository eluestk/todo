(function() {
  // 'use strict';
  this.app = this.app || {};
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



  class Todos {
    constructor() {
      // localStrageからitemを読む
      // this.todoItems = '';
      this.todoItems = [];
      for (let i = 0; i < localStorage.length; i++) {
        var itemKey = localStorage.key(i);
        if (/[0-9]{13}/.test(itemKey)) {
          var item = JSON.parse(localStorage.getItem(itemKey));
          this.todoItems.push(item);
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
      // for();
      // localStorageから消す
    }
    getTodos() {
      return this.todoItems;
    }
  }
  
  class Todo {
    constructor(id, title, descrption, priority) {
      // 
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.description;
    }
    update(title, description, priority) {
      // 
      // localStorageもアップデートする
    }
  }

})();


