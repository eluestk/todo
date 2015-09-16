namespace todo.services {
  
  export class TodoVO {
    constructor(
      public id: string,
      public title: string,
      public priority: number,
      public detail: string,
      public isDone: boolean)
    {
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      this.isDone = isDone;
    }
  };
  
  export class TodoVOService {
    getClass() {
      return TodoVO;
    };
    
    getInstance(
      id: string,
      title: string,
      priority: number,
      detail: string,
      isDone: boolean): TodoVO
    {
      return new TodoVO(id, title, priority, detail, isDone);
    };
  };
  
  angular.module('todoApp').service('TodoVOService', TodoVOService);
}