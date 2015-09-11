(() => {
  const module = angular.module('todoApp');
  
  module.config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/list', {
        controller: 'ListPageCtrl',
        controllerAs: 'vm',
        templateUrl: '/app/pages/list/list.html'
      })
      .when('/detail', {
        controller: 'DetailPageCtrl',
        controllerAs: 'vm',
        templateUrl: '/app/pages/detail/detail.html'
      })
      .otherwise({
        redirectTo: '/list'
      });
      
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });
})();
  
