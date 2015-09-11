(() => {
  'use strict';
  
  class Todos {    
    constructor(Todo) {
      // localStrageからitemを読む
      this.todoItems = [];
      this.Todo = Todo;
      
      for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        if (/[0-9]{13}/.test(id)) {
          let item = JSON.parse(localStorage.getItem(id));
          let todoItem = new Todo(id, item.title, item.priority, item.detail, item.isDone);
          this.todoItems.push(todoItem);
        }
      }
    };
    add(todo) {
      // todoItems.push(todoItem);
      let todoItem = new this.Todo(todo.id, todo.title, todo.priority, todo.detail, todo.isDone);
      this.todoItems.push(todoItem);
      // localStorageに書き込む
      let item = this.toLocalStorageTodo(todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone);
      localStorage.setItem(todoItem.id, JSON.stringify(item));
    };
    remove(todoItemIds) {
      // localStorageから消す
      for(let i = 0; i < todoItemIds.length; i++) {
        localStorage.removeItem(todoItemIds[i]);
      }
    };
    toLocalStorageTodo(title, priority, detail, isDone) {
      let item = {
        title,
        priority,
        detail,
        isDone
      };
      return item;
    };
  };
  
  class TodosService {
    constructor(TodoService) {
      this.todoService = TodoService;
    }
    getClass() {
      return Todos;
    };
    
    getInstance() {
      return new Todos(this.todoService.getClass());
    };
  };
  
  TodosService.$inject = ['TodoService'];
  angular.module('todoApp').service('TodosService', TodosService);
})();