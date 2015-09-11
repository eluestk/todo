(() => {
  'use strict';
  
  class TodoVO {
    constructor(id, title, priority, detail, isDone) {
      this.id = id;
      this.title = title;
      this.priority = priority;
      this.detail = detail;
      this.isDone = isDone;
    }
  };
  
  class TodoVOService {
    getClass() {
      return TodoVO;
    };
    
    getInstance(id, title, priority, detail, isDone) {
      return new TodoVO(id, title, priority, detail, isDone);
    };
  };
  
  angular.module('todoApp').service('TodoVOService', TodoVOService);
})();