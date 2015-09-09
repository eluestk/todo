(() => {
  'use strict';
  
  let headerGlobal = (() => {
    return {
      restrict: 'E',
      templateUrl: 'app/components/headerGlobal/headerGlobal.html'
    };
  });
  
  angular.module('todoApp').directive('headerGlobal', [headerGlobal]);
})();