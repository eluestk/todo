(() => {
  'use strict';
  
  class DetailPageCtrl {
    constructor() {
      this.msg = 'here is your detail';
      this.title = 'TODO:Detail'; 
    }
  }
  angular.module('todoApp').controller('DetailPageCtrl', DetailPageCtrl);
      
  
})();
