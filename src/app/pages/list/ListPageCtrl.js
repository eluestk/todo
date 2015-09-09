(() => {
  'use strict';
  class ListPageCtrl {
    constructor() {
      this.title = 'TODO:List';
      this.model = {
        todos: [
          {
            id: '123456',
            title: 'TEST1',
            priority: '1',
            detail: 'THIS IS THE DETAIL'
          },
          {
            id: '123457',
            title: 'TEST2',
            priority: '2',
            detail: 'DETAIL DETAIL'
          }
        ]
      }
    }
  }
  angular.module('todoApp').controller('ListPageCtrl', ListPageCtrl);
})();
