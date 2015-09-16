namespace todo.services {
  
  export class Todos {
    
    public todoItems: any[];
    private todo: Todo;
    private todoService: TodoService
    
    constructor(Todo: any) {
      // localStrageからitemを読む
      this.todoItems = [];
      this.todo = Todo;
      
      for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        if (/[0-9]{13}/.test(id)) {
          let item = JSON.parse(localStorage.getItem(id));
          let todoItem: Todo = new Todo(id, item.title, item.priority, item.detail, item.isDone);
          this.todoItems.push(todoItem);
        }
      }
    }
    add(todo: Todo): void {
      // todoItems.push(todoItem);
      let todoItem: Todo = new Todo(todo.id, todo.title, todo.priority, todo.detail, todo.isDone);
      this.todoItems.push(todoItem);
      // localStorageに書き込む
      let item = this.toLocalStorageTodo(todoItem.title, todoItem.priority, todoItem.detail, todoItem.isDone);
      localStorage.setItem(todoItem.id, JSON.stringify(item));
    }
    remove(todoItemIds: string[]): void {
      // localStorageから消す
      todoItemIds.forEach((id: string) => localStorage.removeItem(id));
    }
    toLocalStorageTodo(
      title: string,
      priority: number,
      detail: string,
      isDone: boolean): Object
    {
      let item = {
        title,
        priority,
        detail,
        isDone
      };
      return item;
    }
  };
  
  export class TodosService {
    
    private todos: Todos;
    private todoService: TodoService;
    private todosService: TodosService;
    
    constructor(TodoService: TodoService) {
      this.todoService = TodoService;
      this.todos = null;
    }
    getClass() {
      return Todos;
    }
    
    getInstance(): Todos{
      if (this.todos !== null) {
        return this.todos;
      }
      this.todos = new Todos(this.todoService.getClass());
      return this.todos;
    }
    clear(): void {
      this.todos = null;
    }
  }
  
  TodosService.$inject = ['TodoService'];
  angular.module('todoApp').service('TodosService', TodosService);
}