
(function() {
  'use strict';
  app = app || {};
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
    TodoItems
  };



  class Todos {
    constructor() {
      // localStrageからitemを読む
      // this.todoItems = '';
      this.todoItems = [];
    }
    add(todoItem) {
      // todoItems.push(todoItem);
      // localStorageに書き込む
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
    id = 0;
    title = '';
    description = '';
    priority = '';
    constructor(id, title, descrption, priority) {
      //
    }
    update(title, description, priority) {
      // 
      // localStorageもアップデートする
    }
  }

})();


