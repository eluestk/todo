(() => {
  
  class CommonUtil {
    
    toLocalStorageTodo () {
      
    };
    
    setDummyData() {
      localStorage.setItem('1234567890123', JSON.stringify({
        title: 'TEST',
        priority: '1',
        detail: 'detail'
      }));
    };
  }
  
  angular.module('todoApp').service('CommonUtil', [CommonUtil]);
  
})();